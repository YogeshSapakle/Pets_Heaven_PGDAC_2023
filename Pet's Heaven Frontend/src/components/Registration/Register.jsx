import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useAppContext } from "../../context/appContext";
import CustomAlert from "../Alert/CustomAlert";

import "./Register.css";

const initialState = {
  userName: "",
  userEmail: "",
  userPassword: "",
  userPhone: "",
  userFirstName: "",
  userLastName: "",
  city: "",
  userRole: "user",
  showAlert: false,
};

const Register = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState(initialState);

  //   const navigate = useNavigate();

  const { registerUser, showAlert, displayAlert, user, redirect } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const {
      userName,
      userEmail,
      userPassword,
      userPhone,
      userFirstName,
      userLastName,
      userRole,
      city,
    } = values;
    if (
      !city ||
      !userName ||
      !userEmail ||
      !userPassword ||
      !userPhone ||
      !userFirstName
    ) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentUser = {
      userName,
      userEmail,
      userPassword,
      userPhone,
      userFirstName,
      userLastName,
      userRole,
      city,
    };

    registerUser(currentUser);

    setValues(initialState);

    // console.log(currentUser);

  };



  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [user]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      onSubmit(event);
    }

    setValidated(true);
  };

  return (
    <div>
      <Container style={{ padding: "50px 0px" }}>
        <Row>
          <Col
            style={{
              backgroundImage: `url(R1.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.9",
            }}
          ></Col>
          <Col xs={5} style={{ border: "5px double black" }}>
            <h1>Registration</h1>
            {showAlert && <CustomAlert />}
            <Form
              noValidate
              validated={validated}
              style={{ paddingTop: "10px", color: "black" }}
              onSubmit={(e) => {
                handleSubmit(e);
              }}  
            >
              {/* <Form style={{ color: "red" }} noValidate validated={validated} onSubmit={handleSubmit}> */}
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  {/* <Form.Label>First name</Form.Label> */}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      pattern="[a-zA-Z]{3,}"
                      name="userFirstName"
                      value={values.userFirstName}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter valid first name.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  {/* <Form.Label>Last name</Form.Label> */}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      pattern="[a-zA-Z]+"
                      onChange={handleChange}
                      name="userLastName"
                      value={values.userLastName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter valid last name.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                      pattern="[a-zA-Z0-9]{5,}"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>City</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      aria-describedby="inputGroupPrepend"
                      required
                      pattern="[a-zA-Z0-9]{3,}"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please give a valid city.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                    required
                    name="userEmail"
                    value={values.userEmail}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    pattern="[a-zA-Z0-9]{8,}"
                    required
                    name="userPassword"
                    value={values.userPassword}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password. Minimum Password lenght
                    must be 8 characters.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Phone</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      +91
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Phone"
                      pattern="^[6-9]\d{9}$"
                      required
                      name="userPhone"
                      value={values.userPhone}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="userRole"
                    onChange={handleChange}
                  >
                    <option value="user">User</option>
                    <option value="rescuer">Rescuer</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
