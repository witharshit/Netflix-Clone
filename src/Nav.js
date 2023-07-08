import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {

    const [show,handleShow]=useState(false);


  

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            handleShow(true);
          } else {
            handleShow(false);
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);



  return (
    <div className={`nav ${show && "navblack"}`}>
        
      <img className='navlogo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="Netflix Logo" ></img>
      
      <img className='navavatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="Netflix User Logo" ></img>
      
    </div>
  )
}

export default Nav;