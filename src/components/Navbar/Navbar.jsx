import React, { useState } from 'react'
import "./navbar.css"

export const Navbar = () => {

    const[showMenu, setShowMenu] = useState(false);

    const handleClick = () =>{
        setShowMenu(!showMenu);
    }

  return (
    <nav>
        <h3 className='logo'> Zeus </h3>

        <div>
        <ul className={showMenu? "navlinks active" : "navlinks"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" id = "contact"><i className='bx bxl-telegram'></i>Contact</a></li>
        </ul>

        </div>

        <div id='mobile'>
        <i className={showMenu? 'fa-solid fa-xmark':'fa-solid fa-bars'} onClick = {handleClick}></i>
        </div>
    </nav>
  )
}
