import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header2 from "../Commons/Header2";
import './Travel.css';

function Travel() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="vh-100 d-flex flex-column overflow-hidden">
      <Header2 />
      <Container fluid className="flex-grow-1 overflow-auto py-4 travel-main2">
        <Row className="justify-content-center text-center mb-4">
          <Col xs={12} md={8}>
            <h1>Explore the world with a smile</h1>
            <p>
              Welcome to Saudi Arabia: Discover rich history, stunning
              landscapes, vibrant cities, and unique experiences. Plan your
              unforgettable adventure in this captivating destination.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} className="d-flex justify-content-around">
            <Form.Check
              type="radio"
              name="travel-option"
              id="airport-to-hotel"
              label="Airport to Hotel"
              value="airport-to-hotel"
              checked={selectedOption === "airport-to-hotel"}
              onChange={handleOptionChange}
            />
            <Form.Check
              type="radio"
              name="travel-option"
              id="hotel-to-airport"
              label="Hotel to Airport"
              value="hotel-to-airport"
              checked={selectedOption === "hotel-to-airport"}
              onChange={handleOptionChange}
            />
            <Form.Check
              type="radio"
              name="travel-option"
              id="round-trip"
              label="Round Trip"
              value="round-trip"
              checked={selectedOption === "round-trip"}
              onChange={handleOptionChange}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form className="bg-glass p-3">
              <Form.Group controlId="formDestination" className="mb-3">
                <Form.Label>City or Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="6730 Luna Land North Rhiannonmouth"
                />
              </Form.Group>

              <Form.Group controlId="formPickUpDate" className="mb-3">
                <Form.Label>Pick-up Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formPickUpTime" className="mb-3">
                <Form.Label>Pick-up Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Form.Group controlId="formTravellers" className="mb-3">
                <Form.Label>No. of Travellers</Form.Label>
                <Form.Control as="select">
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4 adults</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Travel;
