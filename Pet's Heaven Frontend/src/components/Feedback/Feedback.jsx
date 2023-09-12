import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { InputGroup } from "react-bootstrap";
import CustomAlert from "../Alert/CustomAlert";
import { useNavigate } from "react-router";

import { useAppContext } from "../../context/appContext";

const initialState = {
  feedbackSubject: "",
  feedbackBody: "",
  showAlert: false,
};

const Feedback = () => {
  const [validated, setValidated] = useState(false);

  const { addFeedback, showAlert, displayAlert, user } = useAppContext();

  const [username, setUsername] = useState(user?.userName);

  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //   console.log(values);
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { feedbackSubject, feedbackBody } = values;

    if (!feedbackSubject || !feedbackBody) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentFeed = {
      username,
      feedbackBody,
      feedbackSubject,
    };

    addFeedback(currentFeed);

    // console.log(currentFeed);
    // navigate("/login");
  };

  return (
    // <div style={{ background: "yellow", padding: "20px" }}>
    <div style={{ background: "rgb(236, 242, 248)" }}>
      <Container style={{ padding: "50px 0px" }}>
        <Row>
          <Col></Col>
          <Col xs={7}>
            <img
              src="https://arrcolorado.org/wp-content/uploads/2015/08/contactimagev1.jpg"
              alt="404 Image Not Found"
              width={"100%"}
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col xs={6} style={{ border: "5px double black" }}>
            <h1>Feedback</h1>
            {showAlert && <CustomAlert />}
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              style={{ paddingTop: "10px", color: "black" }}
            >
              {/* <Form style={{ color: "red" }} noValidate validated={validated} onSubmit={handleSubmit}> */}
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  {/* <Form.Label>First name</Form.Label> */}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Subject"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder="Subject"
                      pattern="[a-zA-Z\s]{5,}"
                      name="feedbackSubject"
                      value={values.feedbackSubject}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter valid Subject.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  {/* <Form.Label>Last name</Form.Label> */}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Feedback"
                    className="mb-3"
                  >
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                      placeholder="Feedback"
                      minLength={10}
                      maxLength={200}
                      name="feedbackBody"
                      value={values.feedbackBody}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter valid Feedback. Minimum Characters - 10,
                      Maximum Characters - 200.
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
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={username}
                      disabled
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Submit Feedback
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
