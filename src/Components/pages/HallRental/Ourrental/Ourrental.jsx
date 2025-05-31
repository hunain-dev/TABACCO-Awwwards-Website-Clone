import { useState } from "react";
import Imagehoverarea from "./Imagehoverarea";
const Ourrental = ({ Heading, hoverData, HeadingColor ,Hovercolor  }) => {
  const [firstHeading, secondHeading] = Heading; 
  return (
    <div className="Ourrental">
      <h2 style={{ color: HeadingColor  }}>
        {firstHeading}
        <span>{secondHeading}</span>
      </h2> 
      <Imagehoverarea data={hoverData} Hovercolor={Hovercolor} />
    </div>
  );
};

export default Ourrental;
