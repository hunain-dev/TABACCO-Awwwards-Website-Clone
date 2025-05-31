import React from "react";
import HallRentalLaning from "../HallRental/HallRentalLaning/HallRentalLaning";
import BustlingTobacco from "./bustlingtobacco/bustlingtobacco";
import Featured from "../Home/Featured/Featured";
import Ourrental from "../HallRental/Ourrental/Ourrental";
import TakeTabbaco from "../Home/TakeTabbaco/TakeTabbaco";
import Loader from "../../Loader/Loader";

const aboutHoverData = {
  textleft: [
    "Sifra Kramer",
    "Nomi Verbakel",
    "Giorgio Grot",
    "Rosalie Suurmeijer",
    "Hannah Rousseau",
    "Britt Musters",
    "Erik van Wilsum",
  ],
  textbottom: [
    "Operations Coordinator",
    "Graphic Designer",
    "Content Marketer",
    "Commercial Manager",
    "Sales Manager",
    "Operations",
    "Direction",
  ],
  textright: [
    "Feature goal",
    "Feature goal",
    "Feature goal",
    "Feature goal",
    "Feature goal",
    "Feature goal",
    "Feature goal",
  ],
};

const Aboutus = ({ firstHeading = "Our", secondHeading = "Team" }) => {
  return (
    <div className="Aboutus">
      <Loader />
      <HallRentalLaning
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_11.jpg"
        title="About Tobacco theatre"
        Heading="A look behind the scenes"
        showButton={false}
        textColor="#FFEA44" // ✅ ya "black", "red", "#333"
      />

      <BustlingTobacco />

      <Featured
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_06.jpg"
        tittle="Our core values"
        Heading="At Tobacco we strive for excellence in every detail."
        paragraph="Our core values: details, details, details, not a one-night stand but a relationship and we do nothing for less. These are the common thread in everything we do. We believe in building lasting connections with our guests and partners and work closely together to create unique, tailor-made events that exceed expectations.
Our mission and vision: We are an independent place where we as a team, with great pleasure, bring culture and commerce together and let each other strengthen. TOBACCO Theater gives space to diversity in every form you may desire and gives you inspiration to fantasize further than you ever dared to dream.
TOBACCO Theater wants to be the destination for the curious visitor and be known as an iconic place for anyone looking for a unique experience. As an independent art house, we embrace, with a big smile, a wide range of artistic expressions and offer an accessible program where everyone can discover something special at any time. At the same time, we remain a connecting factor between culture and commerce that inspires and strengthens."
        buttonText="Check out the TOBACCO Magazine"
        buttonLink="https://indd.adobe.com/view/805ed071-f8df-42e0-945f-3c701b208567"
        showBackground={false} // 👈 Background remove ho jayega
        reverse={true} // 👈 This makes image right, text left
      />
      <div>
        <Featured
          imageUrl="https://tobacco.nl/wp-content/uploads/2024/12/rsz_2the_jackal_screening_-_skyshowtime-24-1067x1600.jpg"
          tittle="Our hallmark"
          Heading="Where culture and commerce to come together."
          paragraph="By choosing TOBACCO, you contribute directly to the cultural program. The income from commercial activities such as product presentations, conferences, company parties, business meetings and dinners enables us to support, expand and make accessible musical, artistic and creative activities for a wide audience."
          buttonText="View the agenda"
          buttonLink="/Programticket"
          showBackground={false} // 👈 Background remove ho jayega
          reverse={false} // 👈 This makes image right, text left
        />
      </div>

      <Featured
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/zaalverhuur_split-1.jpg"
        tittle="Catering"
        Heading="Michelin-worthy catering for every event"
        paragraph="In the hidden catacombs of our historic city monument you will find the catering kitchen, a culinary paradise where fresh, local ingredients are transformed into tasteful creations. Under the inspiring leadership of Michelin chef Dennis Huwaë, TOBACCO lovingly serves breakfast, lunch or dinner at the highest level. We also work with other caterers who know exactly how to set your taste buds on fire, each with their own unique specialty. We are happy to think along with you to find the perfect match. Do you prefer to have your own caterer in mind? No problem, with a catering fee that is of course also possible! For more information, see our most recent food book below."
        buttonText="View our foodbook"
        buttonLink="https://indd.adobe.com/view/2dad5614-e468-4e62-a846-4ebc60fbc649"
        showBackground={false} // 👈 Background remove ho jayega
        reverse={true} // 👈 This makes image right, text left
      />

      <Ourrental
        Heading={[firstHeading, secondHeading]}
        hoverData={aboutHoverData}
        HeadingColor="white"
        Hovercolor="white"
      />

      <div style={{ marginTop: "18vh" }}>
        <TakeTabbaco
          imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/rich_content-1600x889.jpg"
          heading="Founding couple you for"
          paragraph="At TOBACCO Theater, creativity is always bubbling, but sometimes something magical happens: a new initiative that inspires, moves and gives the future a stage. Stichting 'Stel je Voor' is exactly that. It is our ode to young talent, a place where dreams and ideas grow into unforgettable moments."
          showButton={true}
          buttonText="Learn More"
          buttonLink="/Stichting"
        />
      </div>

      <div style={{ marginTop: "9vh" }}>
        <Featured
          imageUrl="https://tobacco.nl/wp-content/uploads/2024/12/20230531_CompanialConnectGlobal2023_TOBACCOTheater_RebekkaMell_131-1067x1600.jpg"
          tittle="Sustainability"
          Heading="Eye for the future"
          paragraph="Our building is steeped in history, but we also look to the future with a determined eye. Sustainability is not a choice for us, but a responsibility. Although there is still a long way to go, we are taking more and more concrete steps to reduce our ecological footprint, without ever compromising on quality or experience. We consciously choose local suppliers, invest in energy-efficient solutions and work with sustainable partners such asGreenbookingsandOscar Circular. That goes hand in hand with our love for Amsterdam. Want to know more about the history of TOBACCO Theater and the Nes? Read more below."
          buttonText="Give into the past"
          buttonLink="https://tobacco.nl/en/art-on-the-facade-of-tobacco-theater-by-juna-horstmans/"
          showBackground={false} // 👈 Background remove ho jayega
          reverse={false} // 👈 This makes image right, text left
        />
      </div>
    </div>
  );
};

export default Aboutus;
