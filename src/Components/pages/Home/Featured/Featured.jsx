import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Featured = ({
  imageUrl,
  tittle,
  Heading,
  paragraph,
  buttonLink, 
  buttonText,
  showBackground = true,
  reverse = false,
}) => {
  return (
    <div
      className={`Featured ${
        showBackground ? "with-background" : "no-background"
      } ${reverse ? "reverse" : ""}`}
    >
      <div className="Featuredleft" data-scroll data-scroll-speed="0.1">
        <h6>{tittle}</h6>
        <h5>{Heading}</h5>
        <p>{paragraph}</p>
        {buttonText &&
          buttonLink &&
          (buttonLink.startsWith("http") ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <Button text={buttonText} />
            </a>
          ) : (
            <Link to={buttonLink}>
              <Button text={buttonText} />
            </Link>
          ))}
      </div>

      <div className="Featuredright" data-scroll data-scroll-speed="0.1">
        <img src={imageUrl} alt="Featured" />
      </div>
    </div>
  );
};

export default Featured;
