import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import ListElement from "./ListElement/ListElement";

const Cards = ({ listAll, onRemoveCard }) => {
  return listAll.length > 0 ? (
    <div className="mx-auto">
      <ul className="container">
        {listAll.map((ele, i) => (
          <ListElement ele={ele} key={i} onRemoveCard={onRemoveCard} />
        ))}
      </ul>
    </div>
  ) : (
    <div>No elements</div>
  );
};

export default Cards;
