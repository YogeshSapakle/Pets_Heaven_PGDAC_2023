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
import AddAppoint from "../../pages/Appointments/AddAppoint";

const initialState = {
  date: "",
  time: "",
  showAlert: false,
};

const AddAppointment = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState(initialState);

  const { addAppointment, showAlert, displayAlert, user } = useAppContext();
  const navigate = useNavigate();

  const [username, setUserName] = useState(user?.userName);

  const { complaintId, complaintBy } = useParams();

  let mindate = new Date();
  mindate.setDate(mindate.getDate() + 1);

  let maxdate = new Date();
  maxdate.setDate(maxdate.getDate() + 15);

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { date, time } = values;
    if (!date || !time) {
      displayAlert();
      // console.log("hello");
      return;
    }

    const currentApp = {
      username,
      date,
      time,
      complaintId,
      complaintBy,
    };

    addAppointment(currentApp);

    // console.log(currentApp);
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
            <h1>Give Appointment</h1>
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
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    min={mindate.toISOString().split("T")[0]}
                    max={maxdate.toISOString().split("T")[0]}
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid date.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Time (9 AM to 6 PM)</Form.Label>
                  <Form.Control
                    required
                    type="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    min="09:00"
                    max="18:00"
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid time.
                  </Form.Control.Feedback>
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
                    <Form.Control
                      type="text"
                      aria-describedby="inputGroupPrepend"
                      required
                      name="username"
                      value={username}
                      disabled
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Complaint ID</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      required
                      name="complaintId"
                      value={complaintId}
                      disabled
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Add Appointment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddAppointment;
