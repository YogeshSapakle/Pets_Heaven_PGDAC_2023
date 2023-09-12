import React, { useState, useReducer, useContext, useEffect } from "react";
// axios
import axios from "axios";

import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  ADD_COMPLAINT_BEGIN,
  ADD_COMPLAINT_SUCCESS,
  ADD_COMPLAINT_ERROR,
  ADD_APPOINTMENT_BEGIN,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_ERROR,
  ADD_ORDER_BEGIN,
  ADD_ORDER_SUCCES,
  ADD_ORDER_ERROR,
  ADD_ANIMAL_BEGIN,
  ADD_ANIMAL_SUCCESS,
  ADD_ANIMAL_ERROR,
  GET_COMPSUSER_BEGIN,
  GET_COMPSUSER_SUCCESS,
  GET_COMPSCITY_BEGIN,
  GET_COMPSCITY_SUCCESS,
  GET_COMP_BEGIN,
  GET_COMP_SUCCESS,
  UPDATE_COMPLAINT_BEGIN,
  DELETE_COMPLAINT_BEGIN,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  UPDATE_ORDER_BEGIN,
  DELETE_ORDER_BEGIN,
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
  GET_RESAPPS_BEGIN,
  GET_RESAPPS_SUCCESS,
  DELETE_RESAPP_BEGIN,
  GET_USERAPPS_BEGIN,
  GET_USERAPPS_SUCCESS,
  GET_CONTACTS_BEGIN,
  GET_CONTACTS_SUCCESS,
  DELETE_CONTACT_BEGIN,
  ADD_FEEDBACK_BEGIN,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_ERROR,
  GET_FEEDBACKS_BEGIN,
  GET_FEEDBACKS_SUCCESS,
  DELETE_FEEDBACK_BEGIN,
} from "./actions";

import reducer from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userRole = null;

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  userRole: user ? JSON.parse(user).role[0].roleName : null,
  compsUser: [],
  compsCity: [],
  comp: [],
  ordersUser: [],
  orderUser: [],
  appsRes: [],
  appsUser: [],
  contacts: [],
  feedbacks: [],
  redirect: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const registerUser = async (currentUser) => {
    // console.log(currentUser);
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        currentUser
      );
     console.log(response);
      const { user } = response.data;


      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user },
      });

    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    // console.log(currentUser);
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/jwt/login",
        currentUser
      );
      // console.log(response);
      const { user, token } = data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      // local storage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      // console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  // Update user
  const authFetch = axios.create({
    baseURL: "http://localhost:8080/auth",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  // request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.put("/updateUser", currentUser);

      // no token
      const { user } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });

      logoutUser();
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.message },
        });
      }
    }
    clearAlert();
  };

  const addComplaint = async (current) => {
    dispatch({ type: ADD_COMPLAINT_BEGIN });
    try {
      const response = await authFetch.post("/complaints", current);

      dispatch({
        type: ADD_COMPLAINT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_COMPLAINT_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const addAppointment = async (current) => {
    dispatch({ type: ADD_APPOINTMENT_BEGIN });
    try {
      const response = await authFetch.post("/appointment", current);

      dispatch({
        type: ADD_APPOINTMENT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_APPOINTMENT_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const addOrder = async (current) => {
    dispatch({ type: ADD_ORDER_BEGIN });
    try {
      const response = await authFetch.post("/order", current);

      dispatch({
        type: ADD_ORDER_SUCCES,
      });
    } catch (error) {
      dispatch({
        type: ADD_ORDER_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const addAnimal = async (current) => {
    dispatch({ type: ADD_ANIMAL_BEGIN });
    try {
      const response = await authFetch.post("/animal", current);

      dispatch({
        type: ADD_ANIMAL_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_ANIMAL_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const getCompsUser = async (userName) => {
    let url = `/compuser/${userName}`;

    dispatch({ type: GET_COMPSUSER_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const compsUser = data;
      dispatch({
        type: GET_COMPSUSER_SUCCESS,
        payload: {
          compsUser,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const getCompsCity = async (city) => {
    let url = `/compcity/${city}`;

    dispatch({ type: GET_COMPSCITY_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const compsCity = data;
      dispatch({
        type: GET_COMPSCITY_SUCCESS,
        payload: {
          compsCity,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const getComplaintById = async (id) => {
    let url = `/compid/${id}`;

    dispatch({ type: GET_COMP_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      // console.log(data);
      const comp = data;
      dispatch({
        type: GET_COMP_SUCCESS,
        payload: {
          comp,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const deleteComplaint = async (compId) => {
    dispatch({ type: DELETE_COMPLAINT_BEGIN });
    try {
      await authFetch.delete(`/complaints/${compId}`);
      getCompsUser(user.userName);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const updateComplaint = async (current) => {
    dispatch({ type: UPDATE_COMPLAINT_BEGIN });
    try {
      await authFetch.put(`/complaints`, current);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const getOrdersUser = async (userName) => {
    let url = `/orderuser/${userName}`;

    dispatch({ type: GET_ORDERS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const ordersUser = data;
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: {
          ordersUser,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const getOrderById = async (id) => {
    let url = `/orderid/${id}`;

    dispatch({ type: GET_ORDER_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      // console.log(data);
      const orderUser = data;
      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: {
          orderUser,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const deleteOrder = async (orderId) => {
    dispatch({ type: DELETE_ORDER_BEGIN });
    try {
      await authFetch.delete(`/order/${orderId}`);
      getOrdersUser(user.userName);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const updateOrder = async (current) => {
    dispatch({ type: UPDATE_ORDER_BEGIN });
    try {
      await authFetch.put(`/order`, current);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const getAppointmentsRes = async (userName) => {
    let url = `/appointresc/${userName}`;

    dispatch({ type: GET_RESAPPS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const appsRes = data;
      dispatch({
        type: GET_RESAPPS_SUCCESS,
        payload: {
          appsRes,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const deleteResApps = async (appId) => {
    dispatch({ type: DELETE_RESAPP_BEGIN });
    try {
      await authFetch.delete(`/appointment/${appId}`);
      getAppointmentsRes(user.userName);
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const getAppointmentsUser = async (userName) => {
    let url = `/appointuser/${userName}`;

    dispatch({ type: GET_USERAPPS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const appsUser = data;
      dispatch({
        type: GET_USERAPPS_SUCCESS,
        payload: {
          appsUser,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const getContacts = async () => {
    let url = `/contact`;

    dispatch({ type: GET_CONTACTS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const contacts = data;
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: {
          contacts,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const deleteContact = async (delId) => {
    dispatch({ type: DELETE_CONTACT_BEGIN });
    try {
      await authFetch.delete(`/contact/${delId}`);
      getContacts();
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  const addFeedback = async (current) => {
    dispatch({ type: ADD_FEEDBACK_BEGIN });
    try {
      const response = await authFetch.post("/feedback", current);

      dispatch({
        type: ADD_FEEDBACK_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ADD_FEEDBACK_ERROR,
        payload: {
          msg: error.response.data.message,
        },
      });
    }
    clearAlert();
  };

  const getFeedbacks = async () => {
    let url = `http://localhost:8080/auth/feedback`;

    dispatch({ type: GET_FEEDBACKS_BEGIN });
    try {
      const { data } = await axios.get(url);
      const feedbacks = data;
      dispatch({
        type: GET_FEEDBACKS_SUCCESS,
        payload: {
          feedbacks,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const deleteFeedback = async (delId) => {
    dispatch({ type: DELETE_FEEDBACK_BEGIN });
    try {
      await authFetch.delete(`/feedback/${delId}`);
      getFeedbacks();
    } catch (error) {
      console.log(error);
      // logoutUser();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        displayAlert,
        loginUser,
        logoutUser,
        updateUser,
        addComplaint,
        addAppointment,
        addOrder,
        addAnimal,
        getCompsUser,
        getCompsCity,
        getComplaintById,
        updateComplaint,
        deleteComplaint,
        getOrdersUser,
        getOrderById,
        deleteOrder,
        updateOrder,
        getAppointmentsRes,
        deleteResApps,
        getAppointmentsUser,
        getContacts,
        deleteContact,
        addFeedback,
        getFeedbacks,
        deleteFeedback,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
