import React from "react";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="headline-name">
          <h1>
            James<span>Alderman</span>
          </h1>
        </div>
        <div className="subheader">
          <h3>
            Digital Marketing Skills Coach | Transforming careers and shaping
            the future of tech.
          </h3>
          <button className="subheader-btn">Let's Work Together</button>
        </div>
        <div className="hero-image-container">
          <img src="hero-img-new.png" className="hero-img" alt="hero-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
