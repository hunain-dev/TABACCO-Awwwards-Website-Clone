import React from "react";
import Gallerytext from "./Gallerytext";
import Loader from "../../Loader/Loader";
const Gallery = () => {
  return (
    <div className="Gallery">
      <Loader />
      <Gallerytext />
    </div>
  );
};

export default Gallery;
