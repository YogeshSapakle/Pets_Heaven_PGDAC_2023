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

const initialState = {
  subject: "",
  body: "",
  city: "",
  address: "",
  phone: "",
  address: "",
  showAlert: false,
};

const AddComplaint = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState(initialState);

  const { addComplaint, showAlert, displayAlert, user } = useAppContext();
  const navigate = useNavigate();

  const [username, setUserName] = useState(user?.userName);

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { subject, body, city, phone, address } = values;
    if (!subject || !body || !city || !phone || !address) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentComp = {
      username,
      subject,
      body,
      city,
      phone,
      address,
    };

    addComplaint(currentComp);

    // console.log(currentComp);
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
            <h1>Register Your Complaint</h1>
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
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Type Subject"
                    pattern="[a-zA-Z\s]{5,}"
                    name="subject"
                    value={values.subject}
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
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Type body here"
                    minLength={10}
                    maxLength={200}
                    name="body"
                    value={values.body}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid body. Minimum Characters - 10, Maximum
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
                  <Form.Label>City</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Type City"
                      aria-describedby="inputGroupPrepend"
                      required
                      pattern="[a-zA-Z0-9]{3,}"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Type body here"
                    minLength={10}
                    maxLength={200}
                    name="address"
                    value={values.address}
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
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Add Complaint
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddComplaint;
