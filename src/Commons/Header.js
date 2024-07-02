import React from "react";
import "./Header.css";
import logo from "../Component/Assets/Img/home/logo.png";
import { Link } from "react-router-dom";

import { BsFillLuggageFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { GiParachute } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import { GiIsland } from "react-icons/gi";

function Header() {
  return (
    <div className="header-main">
      <div className="header-icons">
        <div className="header-logoimg1">
          <img src={logo} />
        </div>

        <div className="headericon1">
          <Link className="linenone" to={"/trip"}>
            <BsFillLuggageFill />
          </Link>
          <div className="header-txt">
            <p>Plan a Trip</p>
          </div>
        </div>

        <div className="headericon1">
          <Link className="linenone" to={"/flight"}>
            <MdFlight />
          </Link>
          <div className="header-txt">
            <p>Flight</p>
          </div>
        </div>

        <div className="headericon1">
          <Link className="linenone" to={"/activity"}>
            <GiParachute />
          </Link>
          <div className="header-txt">
            <p>Activity</p>
          </div>
        </div>

        <div className="headericon1">
          <Link className="linenone" to={"/hotel"}>
            <FaHotel />
          </Link>
          <div className="header-txt">
            <p>Hotels</p>
          </div>
        </div>

        <div className="headericon1">
          <FaBus />

          <div className="header-txt">
            <p>Travel</p>
          </div>
        </div>

        <div className="headericon1">
          <GiIsland />

          <div className="header-txt">
            <p>Organized</p>
          </div>
        </div>

        <div className="header-home">
          <Link className="linenone" to={"/"}>
            <h4>Home</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
