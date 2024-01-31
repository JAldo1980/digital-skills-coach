import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <img
          className="logo-img"
          alt="branding-image"
          src="logo-placeholder.png"
        ></img>
        <div className="nav-items">
          <Link
            to="benefits" // Replace "benefits" with the actual ID of your Benefits component
            smooth={true}
            duration={500}
          >
            <h4>Services</h4>
          </Link>
          <Link
            to="results" // Replace "impact" with the actual ID of your Impact component
            smooth={true}
            duration={500}
          >
            <h4>Impact</h4>
          </Link>
          <Link
            to="about" // Replace "about" with the actual ID of your About component
            smooth={true}
            duration={500}
          >
            <h4>About</h4>
          </Link>
          <Link
            to="contact" // Replace "contact" with the actual ID of your Contact component
            smooth={true}
            duration={500}
            className="contact-btn"
          >
            <h4>Contact</h4>
          </Link>
        </div>
        <div className="social-items">
          <h3>Follow:</h3>
          <a href="https://twitter.com/">
            <img
              src="11244080_x_twitter_elon musk_twitter new logo_icon.svg"
              alt="social-media-icon"
              className="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="1820468_brand_linkedin_logo_network_social_icon.svg"
              alt="social-media-icon"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
