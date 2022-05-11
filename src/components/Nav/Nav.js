import React, { useState } from "react";

import navElements from "../../assets/data/navElements";
import CartImg from "../../assets/images/icon-cart.svg";
import AvatarImg from "../../assets/images/image-avatar.png";
import MenuIcon from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import Logo from "../../assets/images/logo.svg";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(MenuIcon);

  return (
    <nav className="nav">
      <div
        onClick={() => setOpen(open === MenuIcon ? CloseIcon : MenuIcon)}
        className="nav-menu__icon"
      >
        <img src={open} alt="menu icon" />
      </div>
      <div className="nav-bar">
        <div className="nav-menu">
          <img src={Logo} alt="logo" />
          <div className={`${open === CloseIcon ? "bg-black" : undefined}`}>
            <ul
              className={`nav-items ${
                open === CloseIcon ? "nav-items__closed" : undefined
              }`}
            >
              {navElements.map((el) => {
                return (
                  <li key={el.id}>
                    <a href={"#" + el.title}>{el.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="nav-avatar">
          <img src={CartImg} alt="cart icon" />
          <img src={AvatarImg} alt="avatar" className="nav-avatar__image" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
