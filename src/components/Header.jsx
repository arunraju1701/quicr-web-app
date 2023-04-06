import React from "react";
import "../styles/Header.less"
import logo from '../assets/logo.png'

export default function Header(props) {
  return (
    <div className={`header ${ props.className }`}>
        <div className="header-logo">
            <a href="#" target="_self" className="logo-wrapper">
                <img src={logo} className="logo" alt="Quickr Logo" />
            </a>
        </div>
    </div>
  );
}
