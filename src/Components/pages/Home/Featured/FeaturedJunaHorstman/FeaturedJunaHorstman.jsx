import React from "react";
import Loader from "../../../../Loader/Loader";
import HallRentalLaning from "../../../HallRental/HallRentalLaning/HallRentalLaning";
import Textarea from "./textarea";
import Junaslider from "./Junaslider";
const FeaturedJunaHorstman = () => {
  return (
    <div className="FeaturedJunaHorstman">
      <Loader />
      <HallRentalLaning
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_11.jpg"
        title="Ode to talent"
        textColor="white"
        Heading={"Founding Couple you For"}
      />
      <Textarea/>
      <Junaslider/>
    </div>
  );
};

export default FeaturedJunaHorstman;
