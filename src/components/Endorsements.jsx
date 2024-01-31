import React from "react";

// KNOWN AS THE IMPACT SECTION
function Endorsments() {
  return (
    <>
      <div className="endorsement-container">
        <h2>Happy Clients</h2>
        {/* IMAGE RIGHT */}
        <div className="endorsement-card">
          <div className="quote">
            <h4>
              "Joe was integral to the whole operation. Without his focused
              leadership, we wouldn't be where we are now."
            </h4>
            <div className="endorser-details">
              <h5>Tommy Belfry</h5>
              <p>Founder of SkillRaise</p>
            </div>
          </div>
          <div className="endorser-container">
            <img
              src="endorser-1-img.jpeg"
              className="endorser-image"
              alt="endorser-image"
            />
          </div>
        </div>
        {/* IMAGE LEFT */}
        <div className="endorsement-card">
          <div className="endorser-container">
            <img
              src="endorser-2-img.png"
              className="endorser-image"
              alt="endorser-image"
            />
          </div>
          <div className="quote">
            <h4>
              "Joe was integral to the whole operation. Without his focused
              leadership, we wouldn't be where we are now."
            </h4>
            <div className="endorser-details">
              <h5>Emily Rodriguez</h5>
              <p>CMO Let's GO!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Endorsments;
