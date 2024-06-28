import React, { useState, useEffect } from 'react';
import './Header2.css';
import logo from '../Component/Assets/Img/home/logo.png';
import { Link } from 'react-router-dom';

import { BsFillLuggageFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { GiParachute } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import { GiIsland } from "react-icons/gi";

function Header2() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='header2-main'>
      {isMobile ? (
        <>
          <div className='sidebar-icon' onClick={toggleSidebar}>
            ☰
          </div>
          <div className={`header2-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className='header2-icons'>
              <div className='header2icon1'>
                <Link className='linenone' to={'/trip'}>
                  <BsFillLuggageFill />
                  <div className='header2-txt'>
                    <p>Plan a Trip</p>
                  </div>
                </Link>
              </div>

              <div className='header2icon1'>
             <Link className='linenone' to={'/flight'}>
                <MdFlight />
                <div className='header2-txt'>
                  <p>Flight</p>
                </div>
                </Link>
              </div>

              <div className='header2icon1'>
                <GiParachute />
                <div className='header2-txt'>
                  <p>Activity</p>
                </div>
              </div>

              <div className='header2icon1'>
                <FaHotel />
                <div className='header2-txt'>
                  <p>Hotels</p>
                </div>
              </div>

              <div className='header2icon1'>
                <FaBus />
                <div className='header2-txt'>
                  <p>Travel</p>
                </div>
              </div>

              <div className='header2icon1'>
                <GiIsland />
                <div className='header2-txt'>
                  <p>Organized</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='header2-desktop'>
          <div className='header2-logoimg1'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='header2-icons'>
            <Link className='linenone' to={'/trip'}>
              <div className='header2icon1'>
                <BsFillLuggageFill />
                <div className='header2-txt'>
                  <p>Plan a Trip</p>
                </div>
              </div>
            </Link>

            <div className='header2icon1'>
      
              <MdFlight />
              <Link className='linenone' to={'/flight'}>
              <div className='header2-txt'>
                <p>Flight</p>
              </div>
              </Link>
            </div>

            <div className='header2icon1'>
              
              <GiParachute />
              <Link className='linenone' to={'/activity'}>
              <div className='header2-txt'>
                <p>Activity</p>
              </div>
              </Link>
            </div>

            <div className='header2icon1'>
              <FaHotel />
              <Link className='linenone' to={'/hotels'}>
              <div className='header2-txt'>
                <p>Hotels</p>
              </div>
              </Link>
            </div>

            <div className='header2icon1'>
              <FaBus />
              <div className='header2-txt'>
                <p>Travel</p>
              </div>
            </div>

            <div className='header2icon1'>
              <GiIsland />
              <div className='header2-txt'>
                <p>Organized</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header2;
