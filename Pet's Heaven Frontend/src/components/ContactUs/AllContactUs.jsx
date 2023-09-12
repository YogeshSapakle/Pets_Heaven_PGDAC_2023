import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useAppContext } from "../../context/appContext";

import { useNavigate } from "react-router";

const AllContactUs = () => {
  const { getContacts, contacts, user, deleteContact } = useAppContext();
  useEffect(() => {
    getContacts();
  }, [contacts]);

  //   console.log(appsRes);

  //   console.log(compsUser);

  const navigate = useNavigate();

  if (contacts.length === 0) {
    return (
      <>
        <div>
          <h2>No Contacts to display...</h2>
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
          All Contact Messages
        </h1>
        <Row xs={1} md={3} className="g-4">
          {contacts.map((ele) => (
            <Col>
              <Card className="bg-gradient bg-light shadow">
                <Card.Body className="">
                  <Card.Title>Name : {ele.name}</Card.Title>
                  <Card.Text>
                    Phone : <b>{ele.phone}</b>
                  </Card.Text>
                  <Card.Text>Email : {ele.email}</Card.Text>
                  <Card.Text>
                    Message : <b>{ele.message}</b>
                  </Card.Text>
                  <Card.Text>
                    <Card.Link href="#">
                      <Button
                        variant="primary"
                        onClick={() => {
                          deleteContact(ele.id);
                          navigate("/admincontact");
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

export default AllContactUs;
