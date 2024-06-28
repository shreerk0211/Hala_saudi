import React, { useState } from 'react';
import './Organizer.css';
import Header2 from '../Commons/Header2'; // Adjust path as necessary

function Organizer() {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    travelers: '',
    adults: '',
    children: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPassengers = parseInt(formData.adults) + parseInt(formData.children);
    // Handle form submission, e.g., send data to an API
    console.log('Form data submitted:', { ...formData, totalPassengers });
  };

  return (
    <div className="organizer-main">
      <div className="organizer-header">
        <Header2 />
      </div>
      <div className='org-main2'>
        <div className="organizer-container">
          <h2>Organized Packages</h2>
          <form className="organizer-form" onSubmit={handleSubmit}>
            <div className="form-group small">
              <label>Destination</label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Enter Destination"
              />
            </div>
            <div className="form-group small">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group small">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            <div className="form-group small">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
              />
            </div>
            <div className="form-group small">
              <label>No. of Travelers</label>
              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                placeholder="Enter number of travelers"
              />
            </div>
            {formData.travelers && (
              <>
                <div className="form-group small">
                  <label>No. of Adults</label>
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    placeholder="Enter number of adults"
                  />
                </div>
                <div className="form-group small">
                  <label>No. of Children</label>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    placeholder="Enter number of children"
                  />
                </div>
                <div className="form-group small">
                  <label>Total Passengers</label>
                  <input
                    type="text"
                    value={parseInt(formData.adults) + parseInt(formData.children)}
                    readOnly
                  />
                </div>
              </>
            )}
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Organizer;
