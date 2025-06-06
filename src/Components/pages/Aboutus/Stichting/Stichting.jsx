import React from "react";
import Loader from "../../../Loader/Loader";
import HallRentalLaning from "../../HallRental/HallRentalLaning/HallRentalLaning";
import Textarea from "../../Home/Featured/FeaturedJunaHorstman/textarea";
import Junaslider from "../../Home/Featured/FeaturedJunaHorstman/Junaslider";

const stichtingLeftData = [
  { heading: "The Stage for Young Talent’", paragraph: "Our foundation 'Stel je Voor!' has one clear mission: to give young, talented artists the opportunity to present themselves and their work to a wider audience. Whether it concerns theatre, photography, fashion, visual arts, media or other creative expressions: we embrace it all. It is precisely this broad approach that makes our search so exciting and offers unexpected art forms the chance to shine in the spotlight. At 'Stel je Voor!' we leave nothing to chance. We make our entire theatre, from the staff to the technical facilities, available free of charge to the selected talents. In this way we offer them a unique opportunity to literally put themselves in the spotlight. And that is paying off: in recent years we have already given many young artists a boost, offered them a larger stage or given them an unforgettable experience." },
];

const stichtingRightData = [
  {paragraph: "We are incredibly proud of the talents who have made their dreams come true with us. Like theatre maker Stein Janssen, who enchanted us with his show De Minnaar. Or photographer Richard Terborg, who shared his creative vision with us with his exhibition Freak Out. Fashion designer Nathaly Pater and her fashion show, Merel Halfweeg with her own clothing line Halfway There…, and stylist Kimberley Wenas with her exhibition Dreams Money Can't Buy. Each and every one of them has inspired and touched us." },
];


  const obj = [
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/stel-je-voor-dj.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/39.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/Stel-je-voor-Kim-Feenstra.jpg" },
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/e2c2154e-7466-44ef-b83b-329860a8b221-1200x801.jpeg" }, 
  { img: "https://tobacco.nl/wp-content/uploads/2024/12/stel-je-voor-expo-1200x800.jpg" }, 

    { img: "https://tobacco.nl/wp-content/uploads/2024/12/YOUANDI-TOBACCO-Theater-1200x801.jpeg" }, 


      { img: "https://tobacco.nl/wp-content/uploads/2024/12/274dc1a4-5179-409f-96e1-5f71cde29948-1200x801.jpeg" }, 


      { img: "https://tobacco.nl/wp-content/uploads/2024/12/TOBACCOTheater_Kunst_Ruud-de-Wild-The-Show-Must-Go-On-800x1200.jpg" }, 

];


const Stichting = () => {
  return (
    <div className="Stichting">
      <Loader />

      <HallRentalLaning
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/11/rich_content.jpg"
        title="Ode to talent"
        Heading="Founding Couple you For"
      />


      <Textarea
        textColor="black"
        leftData={stichtingLeftData}
        rightData={stichtingRightData}
      />


      <Junaslider
      slider={obj}
      
      />
    </div>
  );
};

export default Stichting;
