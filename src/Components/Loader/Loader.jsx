import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".Loader",
      { y: -800 },
      { y: 0, duration: 1.5, ease: "power2.out" } 
    )
      .to(".Loader", {
        y: 800, 
        duration: 1.4,
        ease: "power2.in",
        delay: 0.6, 
        onComplete: () => {
          const loader = document.querySelector(".Loader");
          if (loader) loader.style.display = "none";
        },
      });
  }, []);

  return <div className="Loader"></div>;
};

export default Loader;
