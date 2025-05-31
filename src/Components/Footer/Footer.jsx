import React from "react";
import { Link } from "react-router-dom"; // Make sure this is at the top
const Footer = () => {
  const Footertopdesc = [
    {
      h6: "Culture & Commerce",
      p: "With Commercial revenue we make art and culture possible and accessible",
    },
    {
      h6: "Versatile & spaces",
      p: "From intimate gatherings to large-scale events, the rooms adapt perfectly.",
    },
    {
      h6: "Central & location",
      p: "With the beautiful Amsterdam city center as the backdrop.",
    },
  ];

  const footercenterdesc = [
    { label: "Vacancies", link: "/" },
    { label: "About us", link: "/Aboutus" },
    { label: "Tobacco Magazine", link: "https://indd.adobe.com/view/b9842c94-28c0-4982-af0a-f606898ecaa5" },
    { label: "Foodbook", link: "https://indd.adobe.com/view/34e3a9bd-9434-4ff7-9d2b-03414037ee1e" },
  ];

  const footerrightdesc = [
    { label: "Featured", link: "/" },
    { label: "Foundation steel do vor", link: "/Aboutus" },
    { label: "Privacy", link: "/magazine" },
    { label: "Cookies", link: "/foodbook" },
  ];

  const text = "Tobacco";

  return (
    <div className="Footer">
      <div className="Footertop">
        {Footertopdesc.map((elem, index) => (
          <div key={index} className="Footertopcard">
            <h6>{elem.h6}</h6>
            <p>{elem.p}</p>
          </div>
        ))}
      </div>

      <div className="Footerbottom">
        <div className="Footerbottomleft">
          <h3>
            Plan your event at <span>TOBACCO</span>
          </h3>
        </div>

        <div className="Footerbottomcenter">
          {footercenterdesc.map((item, index) => (
            <p key={index}>
              <Link to={item.link} className="footer-link">
                {item.label}
              </Link>
            </p>
          ))}
        </div>

        <div className="Footerbottomright">
          {footerrightdesc.map((item, index) => (
            <p key={index}>
                   <Link to={item.link} className="footer-link">
                {item.label}
              </Link>
              
         </p>
          ))}
        </div>
      </div>

      <div className="Footerend">
        <h2>
          {text.split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Footer;
