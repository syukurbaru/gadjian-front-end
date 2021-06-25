import React from "react";
import { Container, Image } from "react-bootstrap";

import "./DailyAttendancePage.css";

import Loading from "../asset/img/loading-buffering.gif";

function DailyAttendancePage() {
  return (
    <div>
      <Container className="daily loading">
        <h2>Comming soon ...</h2>
        <Image src={Loading} />
      </Container>
    </div>
  );
}

export default DailyAttendancePage;
