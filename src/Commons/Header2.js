import React, { useState, useEffect } from "react";
import "./Header2.css";
import logo from "../Component/Assets/Img/home/logo.png";
import { Link } from "react-router-dom";

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
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="header2-main">
      {isMobile ? (
        <>
          <div
            className="sidebar-icon position-relative top-0 left-0"
            onClick={toggleSidebar}
          >
            ☰
          </div>
          <div className={`header2-sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="header2-icons">
              <div className="header2icon1">
                <Link
                  className="linenone d-flex align-items-center flex-row"
                  to={"/trip"}
                >
                  <BsFillLuggageFill />
                  <div className="header2-txt">
                    <p className="m-0">Plan a Trip</p>
                  </div>
                </Link>
              </div>

              <div className="header2icon1">
                <Link
                  className="linenone d-flex align-items-center flex-row"
                  to={"/flight"}
                >
                  <MdFlight />
                  <div className="header2-txt">
                    <p className="m-0">Flight</p>
                  </div>
                </Link>
              </div>

              <div className="header2icon1">
                <Link
                  className="linenone d-flex align-items-center flex-row"
                  to={"/activity"}
                >
                  <GiParachute />
                  <div className="header2-txt">
                    <p className="m-0">Activity</p>
                  </div>
                </Link>
              </div>

              <div className="header2icon1">
                <Link
                  className="linenone d-flex align-items-center flex-row"
                  to={"/hotel"}
                >
                  <FaHotel />
                  <div className="header2-txt">
                    <p className="m-0">Hotels</p>
                  </div>
                </Link>
              </div>

              <div className="header2icon1">
                <Link
                  className="linenone d-flex align-items-center flex-row"
                  to={"/travel"}
                >
                  <FaBus />
                  <div className="header2-txt">
                    <p className="m-0">Travel</p>
                  </div>
                </Link>
              </div>

              <div className="header2icon1">
                <Link
                  className="linenone d-flex align-items-center flex-row"
                  to={"/organizer"}
                >
                  <GiIsland />
                  <div className="header2-txt">
                    <p className="m-0">Organized</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="header2-desktop">
          <div className="header2-logoimg1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="header2-icons">
            <Link className="linenone" to={"/trip"}>
              <div className="header2icon1">
                <BsFillLuggageFill />
                <div className="header2-txt">
                  <p className="m-0">Trip</p>
                </div>
              </div>
            </Link>

            <div className="header2icon1">
              <MdFlight />
              <Link className="linenone" to={"/flight"}>
                <div className="header2-txt">
                  <p className="m-0">Flight</p>
                </div>
              </Link>
            </div>

            <div className="header2icon1">
              <GiParachute />
              <Link className="linenone" to={"/activity"}>
                <div className="header2-txt">
                  <p className="m-0">Activity</p>
                </div>
              </Link>
            </div>

            <div className="header2icon1">
              <FaHotel />
              <Link className="linenone" to={"/hotel"}>
                <div className="header2-txt">
                  <p className="m-0">Hotels</p>
                </div>
              </Link>
            </div>

            <div className="header2icon1">
              <FaBus />
              <Link className="linenone" to={"/travel"}>
                <div className="header2-txt">
                  <p className="m-0">Travel</p>
                </div>
              </Link>
            </div>

            <div className="header2icon1">
              <GiIsland />
              <Link className="linenone" to={"/organizer"}>
                <div className="header2-txt">
                  <p className="m-0">Organized</p>
                </div>
              </Link>

              <div className="home-head">
                <Link to={"/"}>
                  <h2>Home</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header2;
