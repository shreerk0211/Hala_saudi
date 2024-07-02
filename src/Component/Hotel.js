import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header2 from "../Commons/Header2";
import { BsFillLuggageFill } from "react-icons/bs";
import { FaHotel, FaBus } from "react-icons/fa";
import { GiParachute, GiIsland } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import "./Hotel.css";

function Hotel() {
  const [location, setLocation] = useState(null);
  const [guest, setGuest] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const locations = [
    { value: "riyadh", label: "Riyadh" },
    { value: "jeddah", label: "Jeddah" },
    { value: "mecca", label: "Mecca" },
    { value: "medina", label: "Medina" }
  ];

  const guests = [
    { value: 1, label: "1 Person" },
    { value: 2, label: "2 Persons" },
    { value: 3, label: "3 Persons" },
    { value: 4, label: "4 Persons" }
  ];

  return (
    <div className="hotel-main vh-100 d-flex flex-column overflow-hidden">
      <Header2 />
      <Container fluid className="flex-grow-1 overflow-auto py-4">
        <Row className="justify-content-center text-center mb-4">
          <Col xs={12} md={8}>
            <h1>
              Hotel for <span className="text-primary">memorable</span> moments rich in emotions
            </h1>
            <p>
              We have <span className="text-warning">459</span> rooms spread throughout Indonesia with room
              standards equivalent to 5 star hotels.
            </p>
            <Button variant="warning" className="mt-3">Take a tour</Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form className="bg-glass p-4 rounded">
              <Form.Group controlId="formAccommodation" className="mb-3">
                <Form.Label>Accommodation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="6730 Luna Land North Rhiannonmouth"
                />
              </Form.Group>

              <Form.Group controlId="formCheckInDate" className="mb-3">
                <Form.Label>Check-in</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formCheckOutDate" className="mb-3">
                <Form.Label>Check-out</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formGuests" className="mb-3">
                <Form.Label>Guests</Form.Label>
                <Form.Control as="select">
                  {guests.map((guest) => (
                    <option key={guest.value} value={guest.value}>
                      {guest.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hotel;
