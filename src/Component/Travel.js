import React, { useState } from 'react';
import './Travel.css';
import Header2 from '../Commons/Header2';

function Travel() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='travel-main'>
      <div className='travel-header'>
        <Header2 />
      </div>

      <div className='travel-main2'>
        <div className='travel-content'>
          <div className='travel-title'>
            <h1>Explore the world with a smile</h1>
            <p>Welcome to Saudi Arabia: Discover rich history, stunning landscapes, <br></br>vibrant cities, and unique experiences. Plan your unforgettable adventure <br></br>in this captivating destination.</p>
          </div>
        </div>

        <div className='travel-heading'>
          <div className='travel-radio1'>
            <input
              className='radiobtn'
              type='radio'
              name='travel-option'
              value='airport-to-hotel'
              checked={selectedOption === 'airport-to-hotel'}
              onChange={handleOptionChange}
            />
            <label> Airport to Hotel</label>
          </div>

          <div className='travel-radio1'>
            <input
              className='radiobtn'
              type='radio'
              name='travel-option'
              value='hotel-to-airport'
              checked={selectedOption === 'hotel-to-airport'}
              onChange={handleOptionChange}
            />
            <label> Hotel to Airport</label>
          </div>

          <div className='travel-radio1'>
            <input
              className='radiobtn'
              type='radio'
              name='travel-option'
              value='round-trip'
              checked={selectedOption === 'round-trip'}
              onChange={handleOptionChange}
            />
            <label> Round Trip</label>
          </div>
        </div>

        <div className="travel-form">
          <div className="travel-form-group">
            <label>City or Destination</label>
            <input type="text" placeholder="6730 Luna Land North Rhiannonmouth" />
          </div>
          <div className="travel-form-group">
            <label>Pick-up Date</label>
            <input type="date" />
          </div>
          <div className="travel-form-group">
            <label>Pick-up Time</label>
            <input type="time" />
          </div>
          <div className="travel-form-group">
            <label>No. of Travellers</label>
            <select>
              <option>1 adult</option>
              <option>2 adults</option>
              <option>3 adults</option>
              <option>4 adults</option>
            </select>
          </div>
          <button className="travel-search-btn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Travel;
