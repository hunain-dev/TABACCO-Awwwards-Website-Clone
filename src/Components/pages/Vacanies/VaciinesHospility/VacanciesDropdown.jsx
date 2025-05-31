import React, { useState } from "react";
import Button from "../../Home/Button/Button";

const VacanciesDropdown = ({ faqData, buttonText ,HeadingColor = "black", textColor = "Black"}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="VacanciesDropdown">
      <div className="faqs-container">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleDropdown(index)}>
              <div>
<h3 style={{ color: HeadingColor }}>{faq.staff}</h3>
              </div>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className="faq-content">
                {faq.answer.map((elem, i) => (
                  <div key={i} className="faq-answer">
                    {elem.heading && <h5 style={{ color: HeadingColor }} >{elem.heading}</h5>}
                    <p style={{ color: textColor }}>{elem.text}</p>
                  </div>
                ))}
{buttonText && buttonText.trim() !== "" && (
  <div className="faq-button" style={{ marginTop: "2vw" }}>
    <Button text={buttonText} to="/" />
  </div>
)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacanciesDropdown;
