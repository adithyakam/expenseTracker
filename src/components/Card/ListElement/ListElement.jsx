import React from "react";
import { ListGroup, Card } from "react-bootstrap";

const ListElement = ({ ele }) => {
  return (
    <div>
      <ListGroup.Item>
        {ele.category}
        {ele.amt}
      </ListGroup.Item>
    </div>
  );
};

export default ListElement;
