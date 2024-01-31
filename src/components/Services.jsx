// FAQ.js
import React from "react";
import ServiceAccordionItem from "./ServiceAccordionItem";

const Services = () => {
  const serviceData = [
    {
      title: "Digital Marketing Apprenticeship Integration Packages:",
      content: (
        <>
          <p>
            <strong>1. Foundational Digital Skills Integration Package:</strong>
          </p>
          <p>
            Objective: Establish a strong digital foundation for existing
            training programmes.
          </p>
          <p>Services:</p>
          <ul>
            <li>Consultation on digital media integration.</li>
            <li>
              Development of bespoke learning solutions (focus on digital
              marketing apprenticeships).
            </li>
            <li>
              Assistance in curriculum and syllabus design for the digital
              marketing landscape.
            </li>
          </ul>
          <br />
          <p>
            <strong>
              2. Comprehensive Training and Content Development Bundle:
            </strong>
          </p>
          <p>
            Objective: Enhance training effectiveness through engaging content
            and effective delivery.
          </p>
          <p>Services:</p>
          <ul>
            <li>Instructional design expertise for online course materials.</li>
            <li>Scripting and presenting professional video productions.</li>
            <li>
              Standards-driven project management for course development and
              execution.
            </li>
            <li>Delivery of training sessions, coaching, and mentoring.</li>
          </ul>
          <br />
          <p>
            <strong>3. Advanced Digital Skills Programme:</strong>
          </p>
          <p>
            Objective: Elevate digital marketing expertise and learner success.
          </p>
          <p>Services:</p>
          <ul>
            <li>
              Specialised training sessions in SEO, digital marketing
              strategies, social media engagement, and content creation.
            </li>
            <li>
              Transformational approach consultancy for adapting apprenticeship
              programmes.
            </li>
            <li>
              Delivery of level 3 diploma courses with a focus on digital
              marketing.
            </li>
            <li>
              Assessment of work to framework and standards, providing valuable
              feedback.
            </li>
            <li>
              Professional development and feedback sessions for trainers and
              learners.
            </li>
            <li>Critical administration support.</li>
          </ul>
          <br />
        </>
      ),
    },
    {
      title: "Marketing Tuition Package:",
      content: (
        <>
          <p>
            Objective: Provide in-depth marketing tuition for individuals or
            small groups.
          </p>
          <p>Services:</p>
          <ul>
            <li>
              Personalised marketing tuition sessions tailored to the learner's
              needs.
            </li>
            <li>
              Comprehensive coverage of key areas such as SEO, digital marketing
              strategies, social media engagement, and content creation.
            </li>
            <li>
              Hands-on exercises and real-world examples to reinforce learning.
            </li>
            <li>Access to supplementary learning materials.</li>
          </ul>
          <p>
            Pricing: £500 - £1,000 per session (discounts available for multiple
            sessions).
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Event or Lecture Speaking Package:",
      content: (
        <>
          <p>
            Objective: Engage and educate audiences through dynamic event or
            lecture speaking.
          </p>
          <p>Services:</p>
          <ul>
            <li>
              Creation and delivery of captivating presentations on digital
              marketing trends, strategies, and advancements.
            </li>
            <li>
              Tailored content to suit the audience's level of expertise and
              interests.
            </li>
            <li>Interactive Q&A sessions for audience engagement.</li>
            <li>Post-event resources and follow-up support.</li>
          </ul>
          <p>
            Pricing: £1,000 - £3,000 per speaking engagement (travel expenses
            may be additional).
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Digital Skills Workshop Series:",
      content: (
        <>
          <p>
            Objective: Empower teams with practical digital skills through a
            workshop series.
          </p>
          <p>Services:</p>
          <ul>
            <li>
              Tailored workshop series covering various digital marketing
              aspects.
            </li>
            <li>
              Hands-on exercises and group activities for skill reinforcement.
            </li>
            <li>Q&A sessions for participant engagement and clarification.</li>
            <li>Post-workshop resources and ongoing support.</li>
          </ul>
          <p>
            Pricing: £7,000 - £12,000 for a series of workshops (customisation
            options available).
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Customised In-House Training Programme:",
      content: (
        <>
          <p>
            Objective: Develop a bespoke digital skills training programme for
            businesses.
          </p>
          <p>Services:</p>
          <ul>
            <li>Analysis of specific business needs and skill gaps.</li>
            <li>
              Customised curriculum design and training material development.
            </li>
            <li>
              Delivery of in-house training sessions tailored to the company's
              industry and goals.
            </li>
            <li>
              Continuous progress monitoring and adjustment of the training
              programme.
            </li>
          </ul>
          <p>
            Pricing: £10,000 - £20,000 per customised in-house training
            programme.
          </p>
          <br />
        </>
      ),
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="service-container" id="services">
      <h2>Services</h2>
      {serviceData.map((item, index) => (
        <ServiceAccordionItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Services;
