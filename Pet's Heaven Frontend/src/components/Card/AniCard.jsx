import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";

const AniCard = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.map((ele) => {
        return (
          <Card style={{ width: "18rem", marginTop: "0.5rem" }}>
            <Card.Img src={"http://localhost:8080/api/user/"+ele.photo.substring(22)} style={{height: '350px'}} />
            <Card.Body>
              <Card.Title>{ele.name.toUpperCase()}</Card.Title>
              <Card.Text className="text-truncate">
                {ele.description[0].toUpperCase() +
                  ele.description.slice(1).toLowerCase()}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                City:{" "}
                {ele.city[0].toUpperCase() + ele.city.slice(1).toLowerCase()}
              </ListGroup.Item>
              <ListGroup.Item>
                Posted By :{" "}
                {ele.username[0].toUpperCase() +
                  ele.username.slice(1).toLowerCase()}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <Link to={"/addorder/" + ele.username + "/" + ele.id}>
                  <Button variant="primary">Adopt</Button>
                </Link>
              </Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default AniCard;
