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

import axios from "axios";

const initialState = {
  animalName: "",
  animalDescription: "",
  animalCity: "",
  showAlert: false,
};

const fileState = {
  userFile: null,
};

const AddAnimal = () => {
  const [validated, setValidated] = useState(false);

  const [values, setValues] = useState(initialState);

  const [aniFile, setAniFile] = useState(fileState);

  //   const navigate = useNavigate();

  const { addAnimal, showAlert, displayAlert, user } = useAppContext();
  const navigate = useNavigate();
  const [userName, setUserName] = useState(user?.userName);

  const handleChange = (e) => {
    // console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setAniFile({ ...aniFile, userFile: file });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { animalName, animalDescription, animalCity } = values;

    const { userFile } = aniFile;

    let formData = new FormData();

    formData.append("file", userFile);
    formData.append("animalName", animalName);
    formData.append("animalDescription", animalDescription);
    formData.append("animalCity", animalCity);
    formData.append("userName", userName);

    addAnimal(formData);

    // formData.forEach((ele) => console.log(ele));
    // navigate("/searchpage");
  };

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
            <h1>Add Animal</h1>
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
                  <Form.Label>Animal Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Type the Animal Name"
                    pattern="[a-zA-Z]{3,}"
                    name="animalName"
                    value={values.animalName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid animal name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Animal City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Animal City"
                    pattern="[a-zA-Z]{3,}"
                    onChange={handleChange}
                    name="animalCity"
                    value={values.animalCity}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter valid Animal City.
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
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
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
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type few words about the animal"
                    pattern="[a-zA-Z0-9\s,.;!]{10,}"
                    required
                    name="animalDescription"
                    value={values.animalDescription}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please type minimum of 10 characters.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Animal Photo</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="aniFile"
                    onChange={handleFile}
                    accept=".png,.jpg,.jpeg"
                  />
                </Form.Group>
              </Row>
              <Button className="mb-3" type="submit" variant="success">
                Submit form
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddAnimal;
