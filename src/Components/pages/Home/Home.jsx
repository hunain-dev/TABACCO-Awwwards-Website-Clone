import React, { useEffect } from "react";
import Homelanding from "./Homelandingpage/Homelanding";
import Onstage from "./Onstage/Onstage";
import Featured from "./Featured/Featured";
import TakeTabbaco from "./TakeTabbaco/TakeTabbaco";
import Loader from "../../Loader/Loader";
import ImpressiveTextArea from "./ImpressiveTextArea/ImpressiveTextArea";
const Home = () => {
  return (
    <div className="Home">
      <Loader />
      <Homelanding />
      <Onstage />
      <ImpressiveTextArea  />
      <TakeTabbaco
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/12/Visual-Ook-op-het-podium.jpg"
        heading="
Also on It stage bee tobacco?"
        paragraph="Our theatre programme offers space for unique, idiosyncratic and surprising cultural initiatives. Do you think your idea fits perfectly here? Contact the most atmospheric theatre in Amsterdam. We would love to think along with you!
."
      />

      <Featured
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/Uitgelicht-Juna-Horstmans-300x400.jpg"
        tittle="Featured"
        Heading="Art on the facade of
     TOBACCO Theater by Juna Horstmans."
        paragraph="How do you merge imagination and precision in art? We spoke with Juna Horstmans, who transforms the everyday into intriguing compositions. From collecting images to cutting and layering colorful pieces, discover how passion and precision blend into a unique art form."
        buttonText="Read more"
        buttonLink="/FeaturedJunaHorstman"
      />
    </div>
  );
};

export default Home;
