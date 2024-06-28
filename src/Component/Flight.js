import React from 'react';
import './Flight.css';
import Header2 from '../Commons/Header2';

function Flight() {
  return (
    <div className='header-all'>
      <Header2 />
      <div className="page-container">

        <div className="banner">

          <div className="banner-content">
            <h1>Beautiful Places of Saudi Arabia</h1>
            <p>Plan your vacation on the most beautiful places of Saudi Arabia</p>
          </div>

        </div>

        <div className="booking-form">
          <div className="form-group">
            <label>Accommodation</label>
            <input type="text" placeholder="6730 Luna Land North Rhiannonmouth" />
          </div>
          <div className="form-group">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Check-out</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Guests</label>
            <select>
              <option>1 adult</option>
              <option>2 adults</option>
              <option>3 adults</option>
              <option>4 adults</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
        </div>

      </div>


      
    </div>
  );
}

export default Flight;
