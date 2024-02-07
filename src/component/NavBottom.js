import React from "react";
import "./NavBar.css";

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
    {/* <hr className="mobile-liner"></hr> */}
      <nav className="nav-wrapper">
          
          <div className="menu-bot-wrapper">
            <ul className="menu">
              <li className="menu-item">
                <IoHomeOutline className="my-icon" />
              </li>
              <li className="menu-item">
                <VscAccount className="my-icon" />
              </li>
              <li className="menu-item">
                <FiBookOpen className="my-icon" />
              </li>
              <li className="menu-item">
                <GrProjects className="my-icon" />
              </li>
              <li className="menu-item">
                <MdOutlineAttachEmail className="my-icon" />
              </li>
            </ul>
          </div>
         
      </nav>
      </div>
    </>
  );
}

export default NavBottom;
