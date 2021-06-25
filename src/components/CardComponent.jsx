import React from "react";
import { Card, Container, Image } from "react-bootstrap";

import "./CardComponent.css";

function CardComponent({ data }) {
  // Format date
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  }

  return (
    <div>
      <Container>
        <Card className="card mb-5">
          <Card.Header className="text-muted">
            Personal ID: {data.id.value}
          </Card.Header>
          <Image src={data.picture.large} className="img" />
          <Card.Body>
            <Card.Text className="title">Name</Card.Text>
            <Card.Text className="text-muted">
              {data.name.first} {data.name.last}
            </Card.Text>
            <Card.Text className="title">Telephone</Card.Text>
            <Card.Text className="text-muted">{data.phone}</Card.Text>
            <Card.Text className="title">Birthday</Card.Text>
            <Card.Text className="text-muted">
              {convertDate(data.dob.date)}
            </Card.Text>
            <Card.Text className="title">Email</Card.Text>
            <Card.Text className="text-muted">{data.email}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CardComponent;
