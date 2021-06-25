import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image } from "react-bootstrap";

import "./HeaderComponent.css";

import User from "../asset/img/unnamed.png";
import Icon from "../asset/img/icon.png";

export default function HeaderComponent() {
  return (
    <div>
      <Navbar variant="primary" bg="light">
        <Link to="/">
          <Image src={Icon} className="image2" />
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hallo, <a href="#login">Gadjian User</a>
          </Navbar.Text>
          <a href="/">
            <Image src={User} roundedCircle className="image" />
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
