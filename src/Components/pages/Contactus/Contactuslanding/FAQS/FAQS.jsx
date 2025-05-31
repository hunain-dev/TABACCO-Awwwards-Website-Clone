import React from "react";
import VacanciesDropdown from "../../../Vacanies/VaciinesHospility/VacanciesDropdown";

const   FAQS = () => {
  const faqData = [
    {
      staff: "Where can I park?",
      answer: [{ text: "For parking, we offer advantageous parking tickets for Q-Park Waterlooplein (10 minutes walk) and De Bijenkorf (5 minutes walk). Would you rather park closer? Parking garage Rokin is only a 1-minute walk from TOBACCO. Please note that we do not have parking tickets available for this garage.In addition, there are several P+R locations around the center:P+R Noord – Metro 52 to Rokin stop, 1 minute walk from TOBACCO.P+R RAI – Metro 52 to Rokin stop, 1 minute walk from TOBACCO.P+R Zeeburg – Tram 26 to Central Station, then 10 minutes walk to TOBACCO" }]
    },
    {
      staff: "How do I reach TOBACCO Theater by public transport?",
      answer: [{ text: "Tram:  Take tram 4 or 14 from Amsterdam Central and get off at the “Rokin” stop. From there, TOBACCO is just a few minutes walk.Metro : The North/South line (Metro 52) takes you directly to the “Rokin” stop. Whether you get on at Amsterdam Noord, Amsterdam Centraal, RAI, or Zuid station, you’ll be at TOBACCO in no time" }]
    },
    {
      staff: "Is it also possible to rent the entire building exclusively?",
      answer: [{ text: "When you organize an event with us, the entire building is exclusively at your disposal. In some cases it is also possible to rent a single separate space." }]
    },
      {
      staff: "Is TOBACCO Theater suitable for disabled people?",
      answer: [{ text: "Yes, disabled people can visit the theatre via a separate entrance. You can reach all areas with the exception of the balcony via our lift. There is also a disabled toilet on the ground floor. Please indicate this in advance and send an email toinfo@tobacco.nl." }]
    },
      {
      staff: "I lost something during my visit to TOBACCO, what should I do now?",
      answer: [{ text: "Did you lose something? We carefully store all found items after each event. Contact us at +31 20 330 0670 or mail toinfo@tobacco.nl." }]
    },
      {
      staff: "Is it possible to book with our own caterer TOBACCO?",
      answer: [{ text: "Yes, that is possible. There is a catering fee for this." }]
    },
      {
      staff: "Can we bring our own catering staff?",
      answer: [{ text: "Yes, that is allowed. However, a TOBACCO location manager must be present at all times during an event or the set-up and dismantling thereof." }]
    },
      {
      staff: "Is it possible to load and unload from the rear?",
      answer: [{ text: "No. Loading and unloading is only permitted via the main entrance at the front. The permitted times of 07:00 – 11:00 must be observed. If loading and unloading is required outside these times, this is possible in consultation." }]
    },
      {
      staff: "Is there air conditioning in TOBACCO?",
      answer: [{ text: "The theatre hall and De Studio both have an air conditioning system." }]
    },
      {
      staff: "Can I get married in TOBACCO?",
      answer: [{ text: "Yes, indeed! TOBACCO is an official wedding location in Amsterdam where lovers can say 'I do' in good times and bad." }]
    },
      {
      staff: "What is the sound limit in TOBACCO Theater?",
      answer: [{ text: "In TOBACCO the noise limit is a maximum of 93 dB until 23:00 and 90 dB thereafter.." }]
    },
    // Add more as needed
  ];

  return (
    <div className="FAQS">
      <div className="FAQSLeft">
        <h2>
          Frequently Asked <br /> Questions <br /> to ask
        </h2>
        <h5>
          We have already answered the most frequently asked questions for you. Is your question not listed?
          Please contact us, we are happy to help you!
        </h5>
      </div>
      <div className="FAQSRight">
<VacanciesDropdown faqData={faqData} textColor="yellow" HeadingColor="yellow" />
      </div>
    </div>
  );
};

export default FAQS;
