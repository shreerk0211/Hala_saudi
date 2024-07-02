import React from "react";
import "./Activity.css";
import Header2 from "../Commons/Header2";

//img
import nature from "./Assets/Img/activity/nature.jpg";
import culture from "./Assets/Img/activity/culture.jpg";
import sight from "./Assets/Img/activity/sightseeing.jpg";
import crus from "./Assets/Img/activity/cruises.jpg";
import sport from "./Assets/Img/activity/sport.jpg";

function Activity() {
  return (
    <div className="vh-100 overflow-hidden">
      <div className="activity-header">
        <Header2 />
      </div>
      <div className="activity-main overflow-y-scroll">
        <div className="activity-topic">
          <h3>Things to do in</h3>
          <h1>Saudi Arabia</h1>
        </div>

        <div className="activity-img-grid">
          <div className="activity-img1">
            <img src={nature} alt="Nature & Adventure" />
            <h2>Nature & Adventure</h2>
          </div>

          <div className="activity-img1">
            <img src={culture} alt="Culture & History Tours" />
            <h2>Culture & History Tours</h2>
          </div>

          <div className="activity-img1">
            <img src={sight} alt="Sightseeing on Wheels" />
            <h2>Sightseeing on Wheels</h2>
          </div>

          <div className="activity-img1">
            <img src={crus} alt="Cruises & Boat tours" />
            <h2>Cruises & Boat tours</h2>
          </div>

          <div className="activity-img1">
            <img src={sport} alt="Extreme Sports" />
            <h2>Extreme Sports</h2>
          </div>
        </div>

        <div className="activity-form bg-glass">
          <div className="activity-form-group">
            <label>Accommodation</label>
            <input
              type="text"
              placeholder="6730 Luna Land North Rhiannonmouth"
            />
          </div>
          <div className="activity-form-group">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="activity-form-group">
            <label>Check-out</label>
            <input type="date" />
          </div>
          <div className="activity-form-group">
            <label>Guests</label>
            <select>
              <option>1 adult</option>
              <option>2 adults</option>
              <option>3 adults</option>
              <option>4 adults</option>
            </select>
          </div>
          <button className="activity-search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
