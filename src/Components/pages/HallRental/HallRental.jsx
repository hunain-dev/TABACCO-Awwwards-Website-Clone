import React from "react";
import HallRentalLaning from "./HallRentalLaning/HallRentalLaning";
import ConferencesDinners from "./ConferencesDinners/ConferencesDinners";
import Ourrental from "./Ourrental/Ourrental";
import AdviceNeccessery from "./AdviceNeccessery/AdviceNeccessery";
import Whatotherthinkoff from "./Whatotherthinkoff/Slider.jsx";
import Featured from "../Home/Featured/Featured.jsx";
import TakeTabbaco from "../Home/TakeTabbaco/TakeTabbaco.jsx";
import Loader from "../../Loader/Loader.jsx";

const hallRentalHoverData = {
  textleft: [
    "Theatre hall",
    "Balcony and Lodge",
    "Studio",
    "Bank security",
    "Lobby",
    "Red and Black Danger",
    "Wine Cellars",
    "Chef table",
    "Library",
  ],
  textbottom: [
    "max. 400 persons",
    "max. 60 persons",
    "max. 100 persons",
    "max. 50 persons",
    "max. 50 persons",
    "max. 40 persons",
    "max. 50 persons",
    "max. 20 persons",
    "max. 22 persons",
  ],
  textright: [
    "200 m2",
    "45 m2",
    "75 m2",
    "40 m2",
    "42 m2",
    "40 m2",
    "50 m2",
    "30 m2",
    "25 m2",
  ],
};

const HallRental = ({ firstHeading = "Our", secondHeading = "Halls" }) => {
  return (
    <div className="HallRental">
      <Loader />

      <HallRentalLaning
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_11.jpg"
        title="Hall rental"
        Heading={
          <>
            Organize unique events in the <br /> heart of Amsterdam
          </>
        }
      />

      <ConferencesDinners />

      <Ourrental
        Heading={[firstHeading, secondHeading]}
        hoverData={hallRentalHoverData}
        HeadingColor="black"
        Hovercolor="black"
      />

      <AdviceNeccessery />
      <Whatotherthinkoff />
      <Featured
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/zaalverhuur_split-1.jpg"
        tittle="Catering"
        Heading="Michelin-worthy catering for every event"
        paragraph="In the hidden catacombs of our historic city monument you will find the catering kitchen, a culinary paradise where fresh, local ingredients are transformed into tasteful creations. Under the inspiring leadership of Michelin chef Dennis Huwaë, TOBACCO lovingly serves breakfast, lunch or dinner at the highest level. We also work with other caterers who know exactly how to set your taste buds on fire, each with their own unique specialty. We are happy to think along with you to find the perfect match. Do you prefer to have your own caterer in mind? No problem, with a catering fee that is of course also possible! For more information, see our most recent food book below."
        buttonText="Take a look at our foodbook"
        buttonLink="https://indd.adobe.com/view/2dad5614-e468-4e62-a846-4ebc60fbc649"
        reverse={false}
      />

      <TakeTabbaco
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/Visual-Ook-op-het-podium-1-800x720.jpg"
        heading="The story behind the walls of our unique theatre"
        paragraph="The TOBACCO Theater is located in a historic building that breathes the stories of Amsterdam. Once a tobacco auction, now a unique event location where past and present come together. Discover more about the history of TOBACCO and the Nes"
        showButton={true}
        buttonLink="Aboutus"
        buttonText="About us" // ✅ Add this line
      />
    </div>
  );
};

export default HallRental;
