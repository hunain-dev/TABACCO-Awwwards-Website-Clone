import gsap from "gsap";
import { useEffect, useRef } from "react";
import man from '/src/assets/imageandvideos/MAN.svg';

const Loader = () => {
  const zoomTweenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Slide-in for loader container
    tl.fromTo(
      ".Loader",
      { y: 800 },
      { y: 0, duration: 1.2, ease: "power2.out" }
    );

    // 2. Start infinite zoom-pulse tween on image
    zoomTweenRef.current = gsap.to(".Loader .image img", {
      scale: 1.2,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1, // infinite
    });
    
    tl.to(
      {},
      {
        duration: 2,
        onComplete: () => {
          if (zoomTweenRef.current) {
            zoomTweenRef.current.kill();
          }
          gsap.to(".Loader", {
            y: -1200,
            duration: 1.2,
            ease: "power2.in",
            onComplete: () => {
              const loaderEl = document.querySelector(".Loader");
              if (loaderEl) loaderEl.style.display = "none";
            },
          });
        },
      }
    );
  }, []);

  return (
    <div className="Loader">
      <div className="image">
        <img src={man} alt="Loading…" />
      </div>
    </div>
  );
};

export default Loader;
