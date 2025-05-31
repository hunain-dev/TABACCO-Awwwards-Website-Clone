import Programlanding from "./Programlanding/Programlanding"
import TakeTabbaco from "../Home/TakeTabbaco/TakeTabbaco"
import Loader from "../../Loader/Loader"
const Programticket = () => {

  return (
    <div className="Programtickets">
      <Loader />
      <Programlanding />
      <TakeTabbaco 
        imageUrl="https://tobacco.nl/wp-content/uploads/2024/10/text_over_img-1200x1083.png"
        heading="Also on stage at TOBACCO?"
        paragraph="Our theatre programme is open to surprising, bubbling cultural initiatives. Please contact the most atmospheric theatre in Amsterdam. We would love to think along with you!."
      />
    </div>
  )
}

export default Programticket
