import React from "react";
import { ListGroup, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import "moment-timezone";

const ListElement = ({ ele, onRemoveCard }) => {
  return (
    <div>
      <li class="list-group-item d-flex justify-content-between my-1">
        <div class="d-flex flex-column">
          {ele.category}
          <small class="text-muted">
            <Moment format="YYYY/MM/DD">{ele.date.toString()}</Moment>
          </small>
        </div>
        <div>
          <spam class="px-5">{ele.amount}</spam>

          <FontAwesomeIcon
            icon={faTrashAlt}
            size="1x"
            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
            onClick={() => {
              onRemoveCard(ele.id, ele.amount);
            }}
          />
        </div>
      </li>
    </div>
  );
};

export default ListElement;
