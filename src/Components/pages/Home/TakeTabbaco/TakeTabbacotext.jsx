import { Link } from "react-router-dom"
import Button from "../Button/Button"

const TakeTabbacotext = ({ heading, paragraph, showButton = true ,  buttonText = "Contact us",buttonLink  } ) => {

  return (
    <div className='TakeTabbacotext' data-scroll data-scroll-speed='0.2'>
      <h2>{heading}</h2>
      <h4>{paragraph}</h4>
{showButton && (
  buttonLink?.startsWith("http") ? (
    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
      <Button text={buttonText} />
    </a>
  ) : (
<Link to={buttonLink || "/Contactus"}>
  <Button text={buttonText} />
</Link>
  )
)}
    </div>
  )
}

export default TakeTabbacotext
