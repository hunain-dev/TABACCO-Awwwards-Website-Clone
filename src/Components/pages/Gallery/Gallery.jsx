  import React from "react";
  import Gallerytext from "./Gallerytext";
  import Loader from "../../Loader/Loader";
  import Galleryimage from "./Galleryimage";
  const Gallery = () => {
    return (
      <div className="Gallery">
        <Loader />
        <Gallerytext />
        <Galleryimage />
      </div>
    );
  };

  export default Gallery;
