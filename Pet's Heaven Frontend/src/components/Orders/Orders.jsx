import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Link, useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/appContext";

const Orders = () => {
  const { getOrdersUser, ordersUser, user, deleteOrder } = useAppContext();
  useEffect(() => {
    getOrdersUser(user.userName);
  }, [ordersUser]);

  const navigate = useNavigate();
  // console.log(compsUser);

  if (ordersUser.length === 0) {
    return (
      <>
        <div>
          <h2>No orders to display...</h2>
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
          Orders of {user?.userName.toUpperCase()}
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
          {ordersUser.map((ele) => (
            <Col>
              <Card className="bg-gradient bg-light shadow">
                <Card.Body className="">
                  <Card.Title>Order ID : {ele.id}</Card.Title>
                  <Card.Title>Name : {ele.orderName}</Card.Title>
                  <Card.Text>
                    City : <b>{ele.orderCity}</b>
                  </Card.Text>
                  <Card.Text>Address : {ele.orderAddress}</Card.Text>
                  <Card.Text>
                    Date : <b>{ele.orderDate}</b>
                  </Card.Text>
                  <Card.Text>
                    Email : <b>{ele.orderEmail}</b>
                  </Card.Text>
                  <Card.Text>
                    Phone : <b>{ele.orderPhone}</b>
                  </Card.Text>

                  <Card.Text>
                    <Card.Link href="#">
                      <Link to={"/editorder/" + ele.id}>
                        <Button variant="primary">Update</Button>
                      </Link>
                    </Card.Link>
                  </Card.Text>
                  <Card.Text>
                    <Card.Link href="#">
                      <Button
                        variant="primary"
                        onClick={() => {
                          deleteOrder(ele.id);
                          navigate("/orders");
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

export default Orders;
