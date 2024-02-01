import React, { useState } from "react";

const ServiceAccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleServiceAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="service-accordion-item">
      <div
        className="service-accordion-header"
        onClick={toggleServiceAccordion}
      >
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="service-accordion-content">{content}</div>}
    </div>
  );
};

export default ServiceAccordionItem;

// need to re-style the above
