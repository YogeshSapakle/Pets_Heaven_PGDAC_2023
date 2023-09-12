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

const UserProfile = () => {
  const [validated, setValidated] = useState(false);

  //   const navigate = useNavigate();

  const { /*updateUser*/ showAlert, displayAlert, user } = useAppContext();
  const navigate = useNavigate();

  const [userName, setUserName] = useState(user?.userName);
  const [userFirstName, setUserFirstName] = useState(user?.userFirstName);
  const [userLastName, setUserLastName] = useState(user?.userLastName);
  const [userEmail, setUserEmail] = useState(user?.userEmail);
  const [userPhone, setUserPhone] = useState(user?.userPhone);
  const [city, setCity] = useState(user?.city);
  const [userRole, setUserRole] = useState(user?.role[0].roleName);
  // console.log(user.role.roleName);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (
      !city ||
      !userName ||
      !userEmail ||
      !userPhone ||
      !userFirstName ||
      !userLastName
    ) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentUser = {
      userName,
      userEmail,
      userPhone,
      userFirstName,
      userLastName,
      city,
    };

    // updateUser(currentUser);

    // registerUser(currentUser);

    // console.log(currentUser);

    // navigate("/login");
  };

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 3000);
  //   }
  // }, [user, navigate]);

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
              backgroundImage: `url(https://media.npr.org/assets/img/2017/08/11/istock-466417874_sq-71e59e36a4e47cd842a6d26d8c11a1529b39c221-s800-c85.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.9",
            }}
          ></Col>
          <Col xs={5} style={{ border: "5px double black" }}>
            <h1>Your Profile</h1>
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
                      aria-describedby="inputGroupPrepend"
                      required
                      name="userName"
                      value={userName}
                      disabled
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Your Role</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      required
                      name="userRole"
                      value={userRole}
                      disabled
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
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
                      value={userFirstName}
                      onChange={(e) => setUserFirstName(e.target.value)}
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
                      onChange={(e) => setUserLastName(e.target.value)}
                      name="userLastName"
                      value={userLastName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter valid last name.
                    </Form.Control.Feedback>
                  </FloatingLabel>
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
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
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
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
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
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please give a valid city.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
