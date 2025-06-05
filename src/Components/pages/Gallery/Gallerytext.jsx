import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Gallerytext = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={ref} className="gallerytext">
      <h1 className="gallery-title"><span>the</span> GALLERY</h1>
    </div>
  );
};

export default Gallerytext;
