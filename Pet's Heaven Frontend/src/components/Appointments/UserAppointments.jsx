import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useAppContext } from "../../context/appContext";

const UserAppointments = () => {
  const { getAppointmentsUser, appsUser, user } = useAppContext();
  useEffect(() => {
    getAppointmentsUser(user?.userName);
  }, [appsUser]);

  //   console.log(appsRes);

  //   console.log(compsUser);

  if (appsUser.length === 0) {
    return (
      <>
        <div>
          <h2>No appointments to display...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          padding: "5% 5%",
          backgroundImage: `url("https://garden.spoonflower.com/c/13024598/p/f/m/Tp3Q8mLxFCgbRU0Jbm8Pse_UIY7Uys5g5MOkTeKCI1BBej24oLMYHw_CKpJi/The%20minimalist%20dog%20paws%20sweet%20pet%20lovers%20boho%20style%20paw%20design%20in%20white%20on%20moody%20blue.jpg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="d-flex justify-content-center"
          style={{ padding: "50px 0px" }}
        >
          All Appointments Given
        </h1>
        <Row
          xs={1}
          md={3}
          className="g-4"
          style={{
            padding: "5% 5%",
            backgroundImage: `url("https://garden.spoonflower.com/c/13024598/p/f/m/Tp3Q8mLxFCgbRU0Jbm8Pse_UIY7Uys5g5MOkTeKCI1BBej24oLMYHw_CKpJi/The%20minimalist%20dog%20paws%20sweet%20pet%20lovers%20boho%20style%20paw%20design%20in%20white%20on%20moody%20blue.jpg")`,
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {appsUser.map((ele) => (
            <Col>
              <Card className="bg-gradient bg-light shadow">
                <Card.Body className="">
                  <Card.Title>Appointment ID: {ele.id}</Card.Title>
                  <Card.Text>
                    Complaint By: <b>{ele.complaintBy}</b>
                  </Card.Text>
                  <Card.Text>Appointment Date: {ele.date}</Card.Text>
                  <Card.Text>
                    Appointment Time: <b>{ele.time}</b>
                  </Card.Text>
                  <Card.Text>
                    Complaint ID: <b>{ele.complaintId}</b>
                  </Card.Text>
                  <Card.Text>
                    Rescuer Name: <b>{ele.username}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default UserAppointments;
