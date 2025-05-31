import React from "react";
import HallRentalLaning from "../HallRental/HallRentalLaning/HallRentalLaning";
import VaciinesHospility from "./VaciinesHospility/VaciinesHospility";
import Featured from '../Home/Featured/Featured'
import Loader from "../../Loader/Loader";
const Vacanies = () => {
  return (
    <div className="Vacanies">
              <Loader />

      <HallRentalLaning
        title="Vacancies"
        Heading=
        "Come to work bee TOBACCO Theater"
        
        showButton={false}
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/12/260124-CMS-Winterfeest-2193-2-1600x1067.jpg"
      />

      
        <VaciinesHospility />
<Featured
  imageUrl="https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_06.jpg"
  tittle="About us"
  Heading="Discover Who We are and what us floats"
  paragraph="At TOBACCO we believe in the perfect combination of culture, passion and entrepreneurship. Driven by an eye for detail and a heart for quality, we create unique experiences that last. Get to know our mission, vision and the values ​​that inspire us every day!"
      buttonText="About us"

  buttonLink="/Aboutus"

  showBackground={true  } // 👈 Background remove ho jayega
  reverse={false} // 👈 This makes image right, text left
/>


    </div>
  );
};

export default Vacanies;
