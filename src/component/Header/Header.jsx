import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className='headerBox'>
      
      <input type="checkbox" id="check" />
      <label htmlFor="check" className='checkbtn'>
        <FaBars size={30} color='white'/>
      </label>

      <div className='logo'><Link className=' link' to="/">Console UI</Link></div>

      <ul >


        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/showdata/Rahat/002/orderdata">ShowData</Link></li>
        <li><Link className='link' to="/about">About</Link></li>
        <li><Link className='link' to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header