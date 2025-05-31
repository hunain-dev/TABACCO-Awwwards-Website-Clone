import React from 'react'
import VacanciesDropdown from './VacanciesDropdown'
const VaciinesHospility = () => {
  
  const faq = {
    staff: "Hospitality Staff",
    answer: [
      {
        text: "A striking gem in the cultural main street of Amsterdam. Industrial, fresh, tough, and the love for detail and history radiates from the walls! Nine beautiful rooms, with the eight-meter high Theaterzaal as an eye-catcher, a kitchen team at Michelin level, and a small, driven team that is always looking for new adventures. TOBACCO has often been the stage for beautiful cultural performances and commercial events in recent years.",
      },
      {
        heading: "Job description duties",
        text: "We are looking for catering staff to strengthen our team immediately. You are the point of contact for the client during the event. For business events from conferences to intimate dinners and company parties and cultural performances from Red Light Jazz to Jennie Lena.",
      },
      {
        heading: "A working day at TOBACCO Theater",
        text: "Today you start your workday at 14:00, a nice dinner for the international client Upfield is on the schedule. You arrive half an hour earlier and drink a cup of coffee at the office with Britt and Rosalie, walk through the party and sprint downstairs to receive the catering team. The guests are coming in and this is your moment to shine! Convert the stage, chairs and tables in a different arrangement because tomorrow there is a big cultural performance in cabaret style. At around 01:00 you have a nice drink with your team and close the Theater.",
      },
      {
        heading: "Employee profile",
        text: "You switch quickly, think in terms of solutions and always go for the best result; You are stress-resistant and can maintain an overview; You are energetic, positive and hospitality is in your blood; No 9 to 5 mentality and working on weekends is no problem.",
      },
      {
        heading: "What do we offer?",
        text: "Market-conform rate;Beautiful diverse events at a prime location in Amsterdam; A friendly young team;Career opportunities; Hospitality training and fun drinks",
      },
    ],
  };

  return (
    <div className='VaciinesHospility'>
       <h1>Vacancies</h1>
<VacanciesDropdown
  faqData={[faq]} // wrap faq in an array
  buttonText="Contact Us"
  HeadingColor="black"
  textColor="black"
  
/> </div>
  )
}

export default VaciinesHospility
