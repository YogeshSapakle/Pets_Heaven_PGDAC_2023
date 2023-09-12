import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";

const initialState = {
  email: "",
  message: "",
  name: "",
  phone: "",
};

export function ContactUs() {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  //console.log(values);
  // const image = "https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?format=jpg&width=960"

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
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, message, name, phone } = values;

    const current = {
      email,
      message,
      name,
      phone,
    };
    createContactUS(current);
  };
  const createContactUS = async (current) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/contact",
        current
      );
      console.log("created");
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const hChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    // <div style={{ background: "yellow", padding: "20px" }}>
    <div
      style={{
        backgroundImage: `url("https://imageio.forbes.com/specials-images/dam/imageserve/1068867780/960x0.jpg?format=jpg&width=960")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <Row>
          <Col></Col>
          {/* style={{ background: 'rgba(245, 40, 145, 1)' }} */}
          <Col
            xs={6}
            style={{
              border: "5px double black",
              background: "rgba(255, 255, 0, 0.25)",
            }}
          >
            <h1>Contact Us</h1>
            <Form
              noValidate
              validated={validated}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              style={{ paddingTop: "10px", color: "black", fontWeight: "bold" }}
            >
              {/* <Form style={{ color: "red" }} noValidate validated={validated} onSubmit={handleSubmit}> */}
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Full name"
                    pattern="[a-zA-Z\s]{3,}"
                    name="name"
                    value={values.name}
                    onChange={hChange}
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid first name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      onChange={hChange}
                      required
                    />

                    <Form.Control.Feedback type="invalid">
                      Please enter email address.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile"
                    pattern="[0-9]{10}"
                    name="phone"
                    value={values.phone}
                    onChange={hChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Mobile.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    placeholder="Message"
                    name="message"
                    value={values.message}
                    onChange={hChange}
                    as="textarea"
                    rows={3}
                    minLength={10}
                    maxlength={200}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter valid Feedback. Minimum Characters - 10,
                    Maximum Characters - 200.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit">
                Submit 
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
