import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://beautiful-sunflower-76de96.netlify.app/image/logo-1-70x70.png"
            alt=""
          />
        </div>
        <div id="submainheader">
          <div className="subheader1">
            <Link id="li1" to="/">
              Home
            </Link>
          </div>
          <div className="subheader2">
            <Link id="li2" to="about">
              About
            </Link>
          </div>
          <div className="subheader3">
            <Link id="li3" to="contact">
              Contact
            </Link>
          </div>
          <div className="subheader4">
            <Link id="li4" to="hireme">
              Hire me
            </Link>
          </div>
        </div>
        <div className="icon">
          <i id="ic-on" class="fa fa-code" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
