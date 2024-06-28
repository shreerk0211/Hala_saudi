import React, { useState } from 'react';
import Header2 from '../Commons/Header2';
import './Hotel.css';
import { BsFillLuggageFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { GiParachute } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import { GiIsland } from "react-icons/gi";

function Hotel() {
  const [location, setLocation] = useState(null);
  const [guest, setGuest] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const locations = [
    { value: 'riyadh', label: 'Riyadh' },
    { value: 'jeddah', label: 'Jeddah' },
    { value: 'mecca', label: 'Mecca' },
    { value: 'medina', label: 'Medina' },
  ];

  const guests = [
    { value: 1, label: '1 Person' },
    { value: 2, label: '2 Persons' },
    { value: 3, label: '3 Persons' },
    { value: 4, label: '4 Persons' },
  ];

  return (
    <div className='hotel-main'>
      <div className='hotel-header'>
        <Header2 />
      </div>
      <div className='hotel-page1'>
        <div className='hotel-info'>
          <h1>Hotel for <span>memorable</span> moments rich in emotions</h1>
          <p>We have <span>459</span> rooms spread throughout Indonesia with room standards equivalent to 5 star hotels.</p>
          <button className='tour-button'>Take a tour</button>
        </div>
        <div className='hotel-form'>
          <div className='hotel-form-group'>
            <label>Accommodation</label>
            <input type='text' placeholder='6730 Luna Land North Rhiannonmouth' />
          </div>
          <div className='hotel-form-group'>
            <label>Check-in</label>
            <input type='date' />
          </div>
          <div className='hotel-form-group'>
            <label>Check-out</label>
            <input type='date' />
          </div>
          <div className='hotel-form-group'>
            <label>Guests</label>
            <select>
              <option>1 adult</option>
              <option>2 adults</option>
              <option>3 adults</option>
              <option>4 adults</option>
            </select>
          </div>
          <button className='hotel-search-btn'>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
