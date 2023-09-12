import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useAppContext } from "../../context/appContext";
import CustomAlert from "../Alert/CustomAlert";

const initialState = {
  orderName: "",
  orderCity: "",
  orderAddress: "",
  orderPhone: "",
  orderEmail: "",
  showAlert: false,
};

const AddOrder = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState(initialState);

  const { addOrder, showAlert, displayAlert, user } = useAppContext();
  const navigate = useNavigate();

  const [userName, setUserName] = useState(user?.userName);

  const { animalId, postedBy } = useParams();

  let today = new Date();
  let orderDate =
    today.getDate() +
    "/" +
    parseInt(today.getMonth() + 1) +
    "/" +
    today.getFullYear();
  //   console.log(orderDate);

  //   console.log(orderName + " and " + animalId);

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { orderName, orderCity, orderAddress, orderPhone, orderEmail } =
      values;
    if (
      !orderName ||
      !orderCity ||
      !orderAddress ||
      !orderPhone ||
      !orderEmail
    ) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentOrd = {
      userName,
      orderCity,
      orderAddress,
      orderPhone,
      orderEmail,
      orderName,
      animalId,
      orderDate,
      postedBy,
    };

    addOrder(currentOrd);

    // console.log(currentOrd);
    // navigate("/login");
  };

  //   useEffect(() => {
  //     if (user) {
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 3000);
  //     }
  //   }, [user, navigate]);

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
      <Container style={{ paddingTop: "50px" }}>
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
            <h1>Adopt Your Favourites!</h1>
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
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Type your full name here"
                    pattern="[a-zA-Z\s]{5,}"
                    name="orderName"
                    value={values.orderName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid subject.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Your Address</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Type your address here"
                    minLength={10}
                    maxLength={200}
                    name="orderAddress"
                    value={values.orderAddress}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid Address. Minimum Characters - 10, Maximum
                    Characters - 200.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Your City</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Type City"
                      aria-describedby="inputGroupPrepend"
                      required
                      pattern="[a-zA-Z0-9]{3,}"
                      name="orderCity"
                      value={values.orderCity}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city name.
                    </Form.Control.Feedback>
                  </InputGroup>
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
                      name="orderPhone"
                      value={values.orderPhone}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
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
                    name="orderEmail"
                    value={values.orderEmail}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom06">
                  <Form.Label>Order Date</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="orderDate"
                    value={orderDate}
                    disabled
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom07">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="userName"
                    value={userName}
                    disabled
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom07">
                  <Form.Label>Animal ID</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="animalId"
                    value={animalId}
                    disabled
                  />
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Adopt
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddOrder;
