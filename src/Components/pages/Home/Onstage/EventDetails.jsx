import { useLocation, useParams } from "react-router-dom";
import { Homeonstagecard, Progamticketcard } from "./Carddata";
import HallRentalLaning from "../../HallRental/HallRentalLaning/HallRentalLaning";
import Textarea from "../Featured/FeaturedJunaHorstman/textarea";
import Button from "../Button/Button";
import Onstagecard from "./Onstagecard";

const EventDetails = () => {
  const { title } = useParams();
  const location = useLocation();

  const fallbackData = [...Homeonstagecard, ...Progamticketcard].find(
    (item) => item.h3 === decodeURIComponent(title)
  );
  const data = location.state || fallbackData;

  const leftArray = Array.isArray(data?.interviewsleft)
    ? data.interviewsleft
    : data?.interviewsleft
    ? [data.interviewsleft]
    : [];

  const rightArray = Array.isArray(data?.interviewsright)
    ? data.interviewsright
    : data?.interviewsright
    ? [data.interviewsright]
    : [];

  const rightData = [
    { heading: "Date", paragraph: data?.date },
    { heading: "Doors open", paragraph: data?.doorsOpen },
    { heading: "Start show", paragraph: data?.startShow },
    { heading: "End of show", paragraph: data?.endShow },
    { heading: "Price", paragraph: data?.price },
    { heading: "Location", paragraph: data?.location },
    { heading: "NB", paragraph: data?.note },
  ];

  return (
    <div className="EventDetails">
      {data ? (
        <HallRentalLaning
          imageUrl={data.imagecon}
          Heading={data.Heading}
          title={data.h3}
          textColor="black"
        />
      ) : (
        <p>Data not found for this event.</p>
      )}

      <div className="eventbottom">
        <div className="eventbottomleft">
          <div>
            <Textarea
              textColor="black"
             leftData={leftArray}
              rightData={rightArray}
            />
          </div>
        </div>
        <div className="eventbottomright">
          <h2>Visitor information</h2>
          <div className="details-grid">
            {rightData.map((item, index) => (
              <div key={index} className="detailbox">
                <h3>{item.heading}</h3>
                <h4>{item.paragraph}</h4>
              </div>
            ))}
          </div>
<Button
  text="Buy ticket"
  buttonLink="https://www.wearesanctum.com/experiences/tobacco-theatre"
  bgColor="black"
  btncolor="white"
/>        </div>
      </div>

    
      <Onstagecard   Carddata={Progamticketcard} />
    </div>
  );
};

export default EventDetails;
