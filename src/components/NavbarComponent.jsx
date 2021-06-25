import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function NavbarComponent() {
  return (
    <div className="mb-5 mt-2">
      <ListGroup>
        <Link to="/">
          <ListGroup.Item action variant="info">
            Beranda
          </ListGroup.Item>
        </Link>
        <Link to="/personal-list">
          <ListGroup.Item action variant="info" data-testid="personal-list">
            Personal List
          </ListGroup.Item>
        </Link>
        <Link to="/daily">
          <ListGroup.Item action variant="info">
            Daily Attendance
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
}

export default NavbarComponent;
