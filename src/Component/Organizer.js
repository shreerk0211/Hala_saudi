import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header2 from "../Commons/Header2"; // Adjust path as necessary
import "bootstrap/dist/css/bootstrap.min.css";
import "./Organizer.css";

function Organizer() {
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    time: "",
    location: "",
    travelers: "",
    adults: "",
    children: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPassengers =
      parseInt(formData.adults) + parseInt(formData.children);
    // Handle form submission, e.g., send data to an API
    console.log("Form data submitted:", { ...formData, totalPassengers });
  };

  return (
    <div className="vh-100 d-flex flex-column overflow-hidden">
      <Header2 />
      <Container
        fluid
        className="flex-grow-1 overflow-auto py-4 org-main2 d-flex justify-content-center align-items-center"
      >
        <Row className="justify-content-center">
          <Col>
            <div className="bg-glass p-4 rounded organizer-container">
              <h2 className="text-center">Organized Packages</h2>
              <Form onSubmit={handleSubmit} className="organizer-form">
                <Form.Group controlId="formDestination" className="mb-3">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    placeholder="Enter Destination"
                  />
                </Form.Group>

                <Form.Group controlId="formDate" className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formTime" className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formLocation" className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter event location"
                  />
                </Form.Group>

                <Form.Group controlId="formTravelers" className="mb-3">
                  <Form.Label>No. of Travelers</Form.Label>
                  <Form.Control
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    placeholder="Enter number of travelers"
                  />
                </Form.Group>

                {formData.travelers && (
                  <>
                    <Form.Group controlId="formAdults" className="mb-3">
                      <Form.Label>No. of Adults</Form.Label>
                      <Form.Control
                        type="number"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        placeholder="Enter number of adults"
                      />
                    </Form.Group>

                    <Form.Group controlId="formChildren" className="mb-3">
                      <Form.Label>No. of Children</Form.Label>
                      <Form.Control
                        type="number"
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        placeholder="Enter number of children"
                      />
                    </Form.Group>

                    <Form.Group
                      controlId="formTotalPassengers"
                      className="mb-3"
                    >
                      <Form.Label>Total Passengers</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          parseInt(formData.adults) +
                          parseInt(formData.children)
                        }
                        readOnly
                      />
                    </Form.Group>
                  </>
                )}

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Organizer;
