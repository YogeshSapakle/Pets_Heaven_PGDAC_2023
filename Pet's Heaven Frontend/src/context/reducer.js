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
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_BEGIN,
  DELETE_ORDER_BEGIN,
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

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User created!",
      redirect: true,
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,

    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Login successful! Redirecting...",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userRole: null,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ADD_COMPLAINT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_COMPLAINT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Complaint Registered!",
    };
  }
  if (action.type === ADD_COMPLAINT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Please Login As User",
    };
  }

  if (action.type === ADD_APPOINTMENT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_APPOINTMENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Appointment Created!",
    };
  }
  if (action.type === ADD_APPOINTMENT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Please Login As Rescuer",
    };
  }

  if (action.type === ADD_ORDER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_ORDER_SUCCES) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Congrats! You become a adopter.",
    };
  }
  if (action.type === ADD_ORDER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Please Login As User",
    };
  }

  if (action.type === ADD_ANIMAL_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_ANIMAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Animal Added Successfully",
    };
  }
  if (action.type === ADD_ANIMAL_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Please Login As Rescuer",
    };
  }

  if (action.type === GET_COMPSUSER_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_COMPSUSER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      compsUser: action.payload.compsUser,
    };
  }

  if (action.type === GET_COMPSCITY_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_COMPSCITY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      compsCity: action.payload.compsCity,
    };
  }

  if (action.type === GET_COMP_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_COMP_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      comp: action.payload.comp,
    };
  }

  if (action.type === DELETE_COMPLAINT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_COMPLAINT_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "success",
      alertText: "Complaint Updated!",
    };
  }

  if (action.type === GET_ORDERS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_ORDERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      ordersUser: action.payload.ordersUser,
    };
  }

  if (action.type === GET_ORDER_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_ORDER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      orderUser: action.payload.orderUser,
    };
  }

  if (action.type === DELETE_ORDER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_ORDER_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "success",
      alertText: "Order Updated!",
    };
  }

  if (action.type === GET_RESAPPS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_RESAPPS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      appsRes: action.payload.appsRes,
    };
  }

  if (action.type === DELETE_RESAPP_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_USERAPPS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_USERAPPS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      appsUser: action.payload.appsUser,
    };
  }

  if (action.type === GET_CONTACTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_CONTACTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      contacts: action.payload.contacts,
    };
  }

  if (action.type === DELETE_CONTACT_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_FEEDBACK_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_FEEDBACK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Feedback Added Successfully",
    };
  }
  if (action.type === ADD_FEEDBACK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "Please Login First",
    };
  }

  if (action.type === GET_FEEDBACKS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_FEEDBACKS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      feedbacks: action.payload.feedbacks,
    };
  }

  if (action.type === DELETE_FEEDBACK_BEGIN) {
    return { ...state, isLoading: true };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
