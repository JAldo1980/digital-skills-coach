import React from "react";
import { Link as ScrollLink } from "react-scroll";

function About() {
  return (
    <>
      <div className="about-container" id="about">
        <h2>How it Started</h2>
        <div className="about-inner-container">
          <div className="about-text-container">
            <p>
              Hailing from the United Kingdom and entrenched in the tech
              recruitment domain, my journey has been one of innovation and
              entrepreneurship.
            </p>
            <br />
            <p>
              My mission is clear: to seamlessly bridge top-tier tech talent
              with pioneering opportunities, reshaping professional trajectories
              and influencing the future of technology.
            </p>
            <br />
            <p>
              My passion extends to the cultivation of diverse, high-performing
              teams — a cornerstone of my commitment to advancing the tech
              industry. A fervent advocate for career elevation, I am driven by
              the belief that success is not only achieved individually but
              through collaborative efforts.
            </p>
            <br />
            <p>
              Let's embark on this journey together, navigating the dynamic
              landscape of tech recruitment, and shaping a future where
              diversity thrives. Join me in transforming careers and making an
              indelible mark on the tech industry.
            </p>
          </div>
          <div className="about-image-container">
            <img className="about-image" src="person-img.png" alt="" />
          </div>
        </div>

        <div className="benefit-links">
          <ScrollLink
            activeClass="active"
            to="results"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            My Results
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Frequently Asked Questions
          </ScrollLink>
        </div>
      </div>
    </>
  );
}

export default About;
