// FAQ.js
import React from "react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const faqData = [
    {
      title: "How do you ensure access to top tech talent?",
      content:
        "I employ a rigorous recruitment process that includes talent sourcing, technical assessments, and thorough interviews. Additionally, we maintain a strong network within the tech community, attend industry events, and collaborate with educational institutions to ensure access to the best and brightest tech professionals.",
    },
    {
      title:
        "What sets your strategic recruitment apart for cutting-edge opportunities",
      content:
        "My strategic recruitment approach involves staying abreast of industry trends, understanding emerging technologies, and forging partnerships with innovative companies. By aligning my recruitment strategies with the latest advancements, I can connect skilled professionals with cutting-edge opportunities that shape the future of technology.",
    },
    {
      title: "How do you build high-performance teams",
      content:
        "Building high-performance teams is at the core of my philosophy. I focus on creating a collaborative and inclusive work environment, where individuals with diverse skills and backgrounds can thrive. I invest in continuous learning, provide professional development opportunities, and foster a culture that values innovation and teamwork.",
    },
    {
      title: "Can I elaborate on your team-building initiatives?",
      content:
        "Of course! My team-building initiatives encompass team-building exercises, workshops, and events designed to enhance collaboration and communication. I also encourage knowledge sharing through mentorship programs, ensuring that each team member has the support and resources needed to excel in their roles.",
    },
    {
      title: "How does you attract and retain top-performing talent",
      content:
        "I attract top-performing talent by offering competitive compensation, a dynamic work environment, and opportunities for career growth. My commitment to work-life balance, flexible schedules, and recognition programs also contribute to retaining our valuable team members.",
    },
    {
      title:
        "In what ways do you stay ahead in recruiting for the latest tech trends?",
      content:
        "Staying ahead in recruiting for the latest tech trends involves continuous market research, engagement with industry thought leaders, and adapting our recruitment strategies to meet evolving demands. I proactively identify emerging technologies, ensuring that my clients have access to the talent needed to stay at the forefront of the tech landscape.",
    },
    // Add more items as needed
  ];

  return (
    <div className="faq-container" id="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Faq;
