import React from "react";
import { Link as ScrollLink } from "react-scroll";

function About() {
  return (
    <div className="about-container" id="about">
      <h2>How I can help you</h2>
      <div className="about-inner-container">
        <div className="about-text-container">
          <p>
            I'm a seasoned digital marketing professional with a rich background
            spanning over 15+ years in the industry. I work to empower
            individuals and businesses by imparting the crucial digital skills
            needed to not only survive but thrive in today's dynamic and
            competitive digital landscape. Drawing from my diverse experiences
            in startups, in-house roles, marketing tutoring, digital
            recruitment, and digital entrepreneurship, I bring a unique blend of
            expertise in digital marketing, strategic recruitment, and staying
            at the forefront of cutting-edge technology trends.
          </p>
          <br />
          <div>
            <p>
              <h4>Enabling Your Journey:</h4> My mission is clear - to bridge
              the gap between your ambitions and tangible achievements through
              tailored coaching and training solutions. I understand the
              challenges you face in navigating the ever-evolving digital realm,
              and my goal is to equip you with the knowledge and skills
              necessary for sustained success.
            </p>
          </div>
          <br />
          <div>
            <p>
              <h4>Distinctive Advantages:</h4> What sets me apart is my
              commitment to staying current with industry trends. As a
              practicing marketer and frontend developer, I ensure that my
              coaching services are not just informed by theory but are deeply
              rooted in the latest advancements in digital marketing and
              technology.
            </p>
          </div>
          <br />
          <div>
            <p>
              <h4>Why Choose My Coaching Services:</h4>
              <div>
                <h4>Customised Approach:</h4> Your journey is unique, and so are
                your needs. Each coaching session is tailored to address your
                specific requirements, whether you are an individual seeking to
                enhance your digital skill set or a business aiming to elevate
                your team's capabilities.
              </div>
              <div>
                <h4>Practical Learning:</h4> I believe in the power of hands-on,
                practical learning experiences. My coaching sessions move beyond
                theory, offering real-world examples and exercises that not only
                deepen your understanding but also enhance your ability to apply
                digital concepts in real-life scenarios.
              </div>
              <div>
                <h4>Industry-Relevant Expertise:</h4> With a sharp focus on
                digital marketing, strategic recruitment, and emerging
                technologies, my coaching services are intricately designed to
                furnish you with the precise skills demanded by today's
                competitive landscape.
              </div>
            </p>
          </div>
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
  );
}

export default About;
