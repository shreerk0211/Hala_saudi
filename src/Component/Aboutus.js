import React from 'react';
import './Aboutus.css';
import Header2 from '../Commons/Header2';
import SaudiImage from './Assets/Img/home/slide2.jpg';  // Make sure to use the correct path to your image

function Aboutus() {
  return (
    <div className='about-main'>
      <div className='about-head'>
        <Header2 />
      </div>

      <div className='about-main2'>
        <div className='saudi-content'>
          <h1>About Us - Hala Saudi </h1>
          <img src={SaudiImage} alt="Saudi Arabia" className='saudi-image' />
          <div className='about-paragraphs'>
            <p className='left-paragraph'>
              Welcome to our Hala Saudi. We are dedicated to offering exceptional travel experiences in one of the world's most captivating destinations. Our mission is to provide comprehensive travel solutions that cater to all your needs, from flight bookings and hotel reservations to guided tours and holiday packages.
            </p>
            <p className='right-paragraph'>
              Our team of travel experts is committed to delivering personalized service and the best value for our customers. Whether you're looking to explore the rich cultural heritage of Riyadh, the stunning landscapes of Al-Ula, or the vibrant city life of Jeddah, we have the perfect travel package for you.
            </p>
            <p className='left-paragraph'>
              We pride ourselves on our extensive network of partners, including top airlines, hotels, and local tour operators, ensuring that you have access to the best travel options available. Our user-friendly platform makes it easy to plan and book your trip, with detailed information and reviews to help you make informed decisions.
            </p>
            <p className='right-paragraph'>
              Our commitment to customer satisfaction is reflected in our round-the-clock support and seamless booking process. We strive to make your travel experience as smooth and enjoyable as possible, from the moment you start planning your trip to the moment you return home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
