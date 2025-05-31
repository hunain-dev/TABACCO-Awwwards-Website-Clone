import Home from "./Components/pages/Home/Home"
import LocomotiveScroll from 'locomotive-scroll';
import Programticket from "./Components/pages/Programticket/Programticket";
import { Route, Routes } from "react-router-dom";
import HallRental from "./Components/pages/HallRental/HallRental";
import Gallery from "./Components/pages/Gallery/Gallery";
import Aboutus from "./Components/pages/Aboutus/Aboutus";
import Vacanies from "./Components/pages/Vacanies/Vacanies";
import Contactus from "./Components/pages/Contactus/Contactus";
import FeaturedJunaHorstman from "./Components/pages/Home/Featured/FeaturedJunaHorstman/FeaturedJunaHorstman";
import Stichting from "./Components/pages/Aboutus/Stichting/Stichting.jsx";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Programticket" element={<Programticket />} />
        <Route path="/HallRental" element={<HallRental />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Vacanies" element={<Vacanies />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/FeaturedJunaHorstman" element={<FeaturedJunaHorstman />} />
      <Route path="/Stichting" element={<Stichting />} /> {/* ✅ Add this */}
      </Routes>

    </div>
  )
}

export default App
