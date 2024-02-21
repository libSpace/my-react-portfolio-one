import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

/* Icon libraries
#################*/

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

function NavBottom() {
  return (
    <>
     

    <div className="mobile-nav">
    <hr className="mobile-liner"></hr>
      <nav className="nav-wrapper">
          
          <div className="menu-bot-wrapper">
            <ul className="menu">
            <li className="menu-item" >
                <Link to="/" >
                  <IoHomeOutline className="my-icon" />
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/About" >
                  <VscAccount className="my-icon" />
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/Education">
                 <FiBookOpen className="my-icon" />
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/Projects" >
                  <GrProjects className="my-icon" />
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/Reach" >
                  <MdOutlineAttachEmail className="my-icon" />
                </Link>
              </li>
            </ul>
          </div>
         
      </nav>
      </div>
    </>
  );
}

export default NavBottom;
