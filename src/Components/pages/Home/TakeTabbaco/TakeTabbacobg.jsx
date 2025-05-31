import TakeTabbacotext from "./TakeTabbacotext";

const TakeTabbacobg = ({
  imageUrl,
  heading,
  paragraph,
  showButton,
  buttonText,
  buttonLink  ,
   
}) => {
  return (
    <div className="TakeTabbacobg">
      <div className="imagecontainer">
        <img src={imageUrl} alt="background" />
        <div className="overlay">
          <TakeTabbacotext
            heading={heading}
            paragraph={paragraph}
            showButton={showButton}
            buttonText={buttonText}
            buttonLink={buttonLink} // ✅ PASS IT HERE
          />
        </div>
      </div>
    </div>
  );
};

export default TakeTabbacobg;
