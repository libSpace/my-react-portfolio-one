import React from 'react';
import './NavBar.css';


function NavBar() {
  return (
    <>
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        {/* <img className='logo' src='./src/images/logoname.png' alt='my-logo'/> */}
        <div className='myLogo' >Malik Malope</div>
        <ul>
          <li className='menu-item'>
            Home
          </li>
          <li className='menu-item'>
            About
          </li>
          <li className='menu-item'>
            Education
          </li>
          <li className='menu-item'>
            Projects
          </li>
          <li className='menu-item'>
            Contacts
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;