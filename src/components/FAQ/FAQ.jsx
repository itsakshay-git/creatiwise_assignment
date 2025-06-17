import React, { useState } from 'react';
import starIcon from '../../assets/logo/Star.svg';
import "./faq.css"

const faqData = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use tools like Figma, Adobe XD, Sketch, InVision, and Miro for wireframing, prototyping, and collaboration.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "I measure success using usability testing, user feedback, conversion rates, and user behavior analytics.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
  <section className="faq-section">
    <div className="faq-container">
      <div className="faq-header">
        <img src={starIcon} alt="star" />
        <h2>Frequently Asked Questions</h2>
      </div>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </button>
            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FAQ;
