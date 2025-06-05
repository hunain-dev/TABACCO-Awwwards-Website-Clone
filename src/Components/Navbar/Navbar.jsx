import React, { useEffect, useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
    const [Openmenu, setOpenmenu] = useState(false);

useEffect(() => {
  if (Openmenu) {
    gsap.fromTo('.sidebar',
      { y: '30%', opacity: 0, },
      { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }
}, [Openmenu]);


  const toggleMenu = () => {
    setOpenmenu(prevState => !prevState); 
  };

const handleLinkClick = () => {
  setOpenmenu(false);
};


 useEffect(() => {
    if (Openmenu) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [Openmenu]); 


  return (
    <div className='Navbar'>
        <div className="bottom">
            <div className="menuicon">
                <IoIosMenu className='icon' onClick={toggleMenu} />
            </div>
          <Link to='/'><h2>Tobbaco</h2></Link> 
            <div className="language">
            <h3>EN</h3>
                <GrLanguage className='icon' />

            </div>
        </div>

        <div className="end">
          
            <div className="ownevent">
            <Link to="/Hallrental"><h6>Business</h6></Link>    
            </div>
            <div className="circle-arrow">
             <Link to="/Hallrental"> <CiLocationArrow1 /></Link>  
                </div>
        </div>
      
      {Openmenu && (
        <div className='sidebar'>
          <h1><Link to='/Programticket' onClick={handleLinkClick}>Program ticket</Link></h1>
         <h1><Link to='/HallRental' onClick={handleLinkClick}>Hall Rental</Link></h1>
 <h1><Link to='/Gallery' onClick={handleLinkClick}>Gallery</Link></h1>
         <h1><Link to='/Aboutus' onClick={handleLinkClick}>About us</Link></h1> 
         <h1><Link to='/Vacanies' onClick={handleLinkClick}>Vacanies</Link></h1> 
         <h1><Link to='/Contactus' onClick={handleLinkClick}>Contact</Link></h1> 
             
         
        </div>
      )}
    </div>
  )
}

export default Navbar
