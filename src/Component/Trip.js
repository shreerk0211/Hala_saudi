import React, { useState } from "react";
import "./Trip.css";
import { Link } from "react-router-dom";
import { MdFlight } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { GiClockwork } from "react-icons/gi";

function Trip() {
  const [showForm, setShowForm] = useState(false);

  const handleIconClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="tripall">
      <div className="nav-tripbtn">
        <Link className="linenone" to={"/"}>
          <p>Home</p>
        </Link>
      </div>
      <div className="trip-container">
        <div className="trip-header">
          <h2>We've got something for you no matter what you're thinking</h2>
        </div>
        <div className="trip-options">
          <div className="trip-option option1" onClick={handleIconClick}>
            <div className="trip-icon">
              <MdFlight />
            </div>
            <h3>I know my destination</h3>
            <p>
              Build single city or multicity trips with flights, hotels,
              activities, airport transfers and pay in 1-click for it all
            </p>
          </div>
          <div className="trip-option option2" onClick={handleIconClick}>
            <div className="trip-icon">
              <ImLocation />
            </div>
            <h3>I have a shortlist</h3>
            <p>
              Compare trips to find the best value for your time & money. Scan
              states/regions/countries/continents
            </p>
          </div>
          <div className="trip-option option3" onClick={handleIconClick}>
            <div className="trip-icon3">
              <GiClockwork />
            </div>
            <h3>Inspire Me</h3>
            <p>
              Find your next travel destination! Billions of data points
              pulled-in to find you the most suitable destinations
            </p>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="form-container">
          <div className="form-content">
            <h2>Start location</h2>
            <input type="text" placeholder="Chennai" />
            <h2>Destination</h2>
            <input type="text" placeholder="Enter Destination" />
            <h2>Number of Travellers</h2>
            <div className="number-input">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <h2>Number of Nights</h2>
            <div className="number-input">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <h2>Start Date</h2>
            <input type="date" />
            <h2>End Date</h2>
            <input type="date" />
            <div className="form-buttons">
              <button onClick={handleCloseForm}>Cancel</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trip;
