import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import ListElement from "./ListElement/ListElement";

const Cards = ({ listAll }) => {
  return listAll.length > 0 ? (
    <div className="mx-auto">
      <Card style={{ width: "18rem" }} className="container">
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          {listAll.map((ele, i) => (
            <ListElement ele={ele} key={i} />
          ))}
        </ListGroup>
      </Card>
    </div>
  ) : (
    <div>No elements</div>
  );
};

export default Cards;
