import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import ListElement from "./ListElement/ListElement";

const Cards = ({ listAll }) => {
  return listAll.length > 0 ? (
    <div className="mx-auto">
      <Card className="container">
        <ul className="container">
          {listAll.map((ele, i) => (
            <ListElement ele={ele} key={i} />
          ))}
        </ul>
      </Card>
    </div>
  ) : (
    <div>No elements</div>
  );
};

export default Cards;
