import React from "react";
import { ListGroup, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ListElement = ({ ele }) => {
  return (
    <div>
      <li class="list-group-item d-flex justify-content-between my-1">
        <div class="d-flex flex-column">
          {ele.amt}
          <small class="text-muted">Dte</small>
        </div>
        <div>
          <spam class="px-5">{ele.category}</spam>

          <FontAwesomeIcon
            icon={faTrashAlt}
            size="1x"
            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
          />
        </div>
      </li>
    </div>
  );
};

export default ListElement;
