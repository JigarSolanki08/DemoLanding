import React, { useState } from "react";
import demolanding from "../images/weblogo.png"
import "./Navbar.css";
import { GoChevronDown } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenu2, setToggleMenu2] = useState(false);

  const handleclick = () => {
    setToggleMenu(!toggleMenu);
    setToggleMenu2(!toggleMenu2);
  };

  const toggle = toggleMenu ? (
    <IoCloseOutline onClick={handleclick} />
  ) : (
    <RiMenu3Line onClick={handleclick} />
  );

  return (
    <div className="container d-flex align-md-items-center m-2 justify-content-md-around justify-content-between bevietfont position-relative">
      <div>
        <img src={demolanding} alt="logo" />
      </div>
      <div className="d-none d-md-block">
        <ul className="nav-links d-flex align-md-items-center gap-md-3">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Pages</a>
            <GoChevronDown />
          </li>
          <li>
            <a href="/">Contact us</a>
           
          </li>
          <li>
            {" "}
            <button type="button" className="btn bbtn">
              Download
            </button>
          </li>
        </ul>
      </div>

      <div className="d-md-none d-block z-2">{toggle}</div>
      <div
        className={classNames(
          `d-md-none`,
          `d-${toggleMenu2 ? `block` : `none`}`,
          `w-100`,
          `vh-100`,
          `position-fixed`,
          `mt-2`,
          `z-1`,
          `ms-0`,
          `bg-white`,
          `container`
        )}
      >
        <ul className="nav-links d-flex gap-5 mt-5 h-100 w-100 flex-column text-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Pages</a>
            <GoChevronDown />
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
          <li>
            <button type="button" className="btn bbtn">
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
