import React from 'react';
import './NavBar.css';
// Home icon 
import { IoHomeOutline } from "react-icons/io5";
// About icon
import { VscAccount } from "react-icons/vsc";
// education and experience icon 
import { FiBookOpen } from "react-icons/fi";
// projects
import { GrProjects } from "react-icons/gr";
// Contatcs
import { MdOutlineAttachEmail } from "react-icons/md";

function NavBar() {
  return (
    <>
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        {/* <img className='logo' src='./src/images/logoname.png' alt='my-logo'/> */}
        <div className='myLogo' >Malik Malope</div>
        <ul>
          <li className='menu-item'>
          <IoHomeOutline className='my-icon'/>
          </li>
          <li className='menu-item'>
          <VscAccount className='my-icon' />
          </li>
          <li className='menu-item'>
            <FiBookOpen className='my-icon' />
          </li>
          <li className='menu-item'>
            <GrProjects className='my-icon' />
          </li>
          <li className='menu-item'>
            <MdOutlineAttachEmail className='my-icon' />
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;