import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//reacticons
import { BsFillLuggageFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { GiParachute, GiIsland } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
//images
import homelogo from "./Assets/Img/home/logo.png";
import gridimg from "./Assets/Img/home/GRID.png";
import desert from "./Assets/Img/home/desert.jpg";
import bgvid from "./Assets/video/4361412-uhd_3840_2160_25fps (1).mp4";

// Slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "./Assets/Img/home/slide1.jpg";
import slide2 from "./Assets/Img/home/slide2.jpg";
import slide3 from "./Assets/Img/home/slide3.jpg";
import { Button } from "react-bootstrap";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="homemain">
      <div className="homebg">
        <div className="home-bgvid">
          <video className="videoTag" autoPlay loop muted>
            <source src={bgvid} type="video/mp4" />
          </video>
        </div>
        <div className="home-nav">
          <div className="logoimg">
            <img src={homelogo} alt="Home Logo" />
          </div>
          <div className="home-icons-web">
            <div className="icon1">
              <Link className="linenone text-center" to={"/organizer"}>
                <GiIsland />
                <div className="icon-p">
                  <p>Organized</p>
                </div>
              </Link>
            </div>
            <div className="icon1">
              <Link className="linenone text-center" to={"/travel"}>
                <FaBus />
                <div className="icon-p">
                  <p>Travel</p>
                </div>
              </Link>
            </div>
            <div className="icon1">
              <Link className="linenone text-center" to={"/hotel"}>
                <FaHotel />
                <div className="icon-p">
                  <p>Hotels</p>
                </div>
              </Link>
            </div>
            <div className="icon1">
              <Link className="linenone text-center" to={"/activity"}>
                <GiParachute />
                <div className="icon-p">
                  <p>Activity</p>
                </div>
              </Link>
            </div>
            <div className="icon1">
              <Link className="linenone text-center" to={"/flight"}>
                <MdFlight />
                <div className="icon-p">
                  <p>Flight</p>
                </div>
              </Link>
            </div>
            <div className="icon1">
              <Link className="linenone text-center" to={"/trip"}>
                <BsFillLuggageFill />
                <div className="icon-p">
                  <p>Plan a Trip</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="nav-li">
            <Link className="linenone" to={"/signup"}>
              <Button variant="light">Sign up</Button>
            </Link>
            <Link className="linenone" to={"/signin"}>
              <Button variant="light">Sign In</Button>
            </Link>
          </div>
        </div>
        <div className="home-content">
          <p>
            People and culture
            <br /> Saudi Arabia has a rich culture <br /> shaped by the
            diversity of the people <br /> which has formed the basis of its{" "}
            <br /> culture identity.
          </p>
        </div>
        <div className="home-heading">
          <h1>
            Explore <br /> Saudi Arabia
          </h1>
        </div>
      </div>
      <div className="page2">
        <div className="page2-head">
          <h1>Best Destinations</h1>
          <p>
            Explore the enchanting landscapes of Saudi Arabia, from <br /> the
            breathtaking deserts to the stunning coastal shores.
          </p>
        </div>
        <div className="page2-grid">
          <img src={gridimg} alt="Grid" />
        </div>
      </div>
      <div className="desert">
        <img src={desert} alt="Desert" />
      </div>
      <div className="page3-title">
        <h1>Hisma</h1>
        <h2>Desert</h2>
      </div>
      <div className="page4">
        <div className="page4-content">
          <p>
            The Hisma Desert in Saudi Arabia is a realm of ethereal beauty that
            captivates the senses. Its vast <br />
            expanse of golden sand dunes, sculpted by the winds of time, creates
            a mesmerizing landscape <br />
            that stretches as far as the eye can see. As the sun sets, painting
            the sky with vivid hues.
          </p>
        </div>
        <div className="page4-img">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slideimg">
                <img src={slide1} alt="Slide 1" />
              </div>
              <div className="slideimg">
                <img src={slide2} alt="Slide 2" />
              </div>
              <div className="slideimg">
                <img src={slide3} alt="Slide 3" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="footer-home">
        <div className="logoimg">
          <img src={homelogo} alt="Footer Logo" />
        </div>
        <div className="foot-points">
          <div className="foot-point1">
            <Link to="/aboutus">
              {" "}
              <li className="abou">About</li>
            </Link>
            <li>About us</li>
            <li>Features</li>
            <li>News & Blogs</li>
          </div>
          <div className="foot-point1">
            <li>Contact</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </div>
          <div className="foot-point1">
            <li>Support</li>
            <li>FAQs</li>
            <li>Support Centre</li>
            <li>Feedback</li>
          </div>
        </div>
      </div>
      <div className="sidebar-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="home-icons">
          <div className="icon1">
            <Link className="linenone" to={"/organizer"}>
              <GiIsland />
            </Link>
            <div className="icon-p">
              <p>Organized</p>
            </div>
          </div>
          <div className="icon1">
            <Link className="linenone" to={"/travel"}>
              <FaBus />
            </Link>
            <div className="icon-p">
              <p>Travel</p>
            </div>
          </div>
          <div className="icon1">
            <Link className="linenone" to={"/hotel"}>
              <FaHotel />
            </Link>
            <div className="icon-p">
              <p>Hotels</p>
            </div>
          </div>
          <div className="icon1">
            <Link className="linenone" to={"/activity"}>
              <GiParachute />
            </Link>
            <div className="icon-p">
              <p>Activity</p>
            </div>
          </div>
          <div className="icon1">
            <Link className="linenone" to={"/flight"}>
              <MdFlight />
            </Link>
            <div className="icon-p">
              <p>Flight</p>
            </div>
          </div>
          <div className="icon1">
            <Link className="linenone" to={"/trip"}>
              <BsFillLuggageFill />
            </Link>
            <div className="icon-p">
              <p>Plan a Trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
