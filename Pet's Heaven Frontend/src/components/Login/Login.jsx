import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/appContext";
import CustomAlert from "../Alert/CustomAlert";

import "./Login.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const initialState = {
  userName: "",
  userPassword: "",
  showAlert: false,
};

const Login = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  const { showAlert, displayAlert, loginUser, user } = useAppContext();

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { userName, userPassword } = values;
    if (!userName || !userPassword) {
      displayAlert();
      return;
    }

    const currentUser = { userName, userPassword };

    loginUser(currentUser);

    // console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 700);
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/02/98/20/18/360_F_298201895_5bPjYW2qPWJ52Wg40H80d8hCAHsPIfpE.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container style={{ paddingTop: "9%", paddingBottom: "10%" }}>
        <Row>
          <Col
            style={{
              backgroundImage: `url(https://a-z-animals.com/media/2022/05/Dogs-with-signs-hoping-to-be-adopted.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          ></Col>
          <Col xs={6} style={{ border: "5px double black" }}>
            <h1>Login</h1>
            {showAlert && <CustomAlert />}
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => {
                handleSubmit(e);
                onSubmit(e);
              }}
              style={{ paddingTop: "10px", color: "black", fontWeight: "bold" }}
            >
              {/* <Form style={{ color: "red" }} noValidate validated={validated} onSubmit={handleSubmit}> */}
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
                      pattern="[a-zA-Z0-9]{3,}"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please give a valid username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    pattern="[a-zA-Z0-9]{4,}"
                    required
                    name="userPassword"
                    value={values.userPassword}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
