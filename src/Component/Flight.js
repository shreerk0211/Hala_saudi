import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import "./Flight.css";
import Header2 from "../Commons/Header2";

function Flight() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (city.length > 3) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `https://demous.pathfndr.io/auto_complete`,
            {
              params: {
                text: city,
                mode: "airport",
                only_recommended_locations: 0,
                include_fields: "filter,currency,group_type,image_url"
              }
            }
          );

          if (response.data && response.data.airport) {
            setSuggestions(response.data.airport);
          } else {
            console.error("Unexpected response structure:", response);
            setSuggestions([]);
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        }
      };

      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [city]);

  return (
    <div className="vh-100 overflow-hidden">
      <Header2 />
      <Container fluid className="page-container pt-5">
        <Row className="banner">
          <Col className="banner-content text-center">
            <h3 className="display-4 display-md-3">
              Beautiful Places of Saudi Arabia
            </h3>
            <p className="d-none d-sm-block">
              Plan your vacation on the most beautiful places of Saudi Arabia
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form className="booking-form bg-glass">
              <Form.Group controlId="formCity">
                <Form.Label>Accommodation</Form.Label>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Enter city or airport"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {suggestions.length > 0 && (
                    <DropdownButton
                      as={InputGroup.Append}
                      variant="outline-secondary"
                      title="Suggestions"
                      id="input-group-dropdown-2"
                    >
                      {suggestions.map((suggestion, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setCity(suggestion.name)}
                        >
                          {suggestion.name}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  )}
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formCheckin">
                <Form.Label>Check-in</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="formCheckout">
                <Form.Label>Check-out</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="formGuests">
                <Form.Label>Guests</Form.Label>
                <Form.Control as="select">
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4 adults</option>
                </Form.Control>
              </Form.Group>
              <Button className="search-btn" variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Flight;
