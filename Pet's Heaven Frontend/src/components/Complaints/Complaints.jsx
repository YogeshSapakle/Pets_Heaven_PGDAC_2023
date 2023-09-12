import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Link, useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/appContext";

const Complaints = () => {
  const { getCompsUser, compsUser, user, deleteComplaint } = useAppContext();
  useEffect(() => {
    getCompsUser(user.userName);
  }, [compsUser]);

  const navigate = useNavigate();
  // console.log(compsUser);

  if (compsUser.length === 0) {
    return (
      <>
        <div>
          <h2>No complaints to display...</h2>
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
          Complaints of {user?.userName.toUpperCase()}
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
          {compsUser.map((ele) => (
            <Col>
              <Card className="bg-gradient bg-light shadow">
                <Card.Body className="">
                  <Card.Title>Subject: {ele.subject.toUpperCase()}</Card.Title>
                  <Card.Text>
                    Description: <b>{ele.body}</b>
                  </Card.Text>
                  <Card.Text>Address: {ele.address}</Card.Text>
                  <Card.Text>
                    City: <b>{ele.city}</b>
                  </Card.Text>
                  <Card.Text>
                    Phone: <b>{ele.phone}</b>
                  </Card.Text>

                  <Card.Text>
                    <Card.Link href="#">
                      <Link to={"/upcomp/" + ele.id}>
                        <Button variant="primary">Update</Button>
                      </Link>
                    </Card.Link>
                  </Card.Text>
                  <Card.Text>
                    <Card.Link href="#">
                      <Button
                        variant="primary"
                        onClick={() => {
                          deleteComplaint(ele.id);
                          navigate("/complaints");
                        }}
                      >
                        Delete
                      </Button>
                    </Card.Link>
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

export default Complaints;
