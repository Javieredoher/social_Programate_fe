import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png"
import message from "../../assets/images/message.png"
import bell from "../../assets/images/bell.png"
import group from "../../assets/images/group.png"
import profile from "../../assets/images/profile.png"
import search from "../../assets/images/search.png"



const Header = () => {
  return (
    <header className="global-nav">
      <div className="global-nav__content">
        <div className="global-nav__top-left-part">
          <a href="#" className="global-nav__branding">
            <img src={logo} alt="" className="logo" />
          </a>
          <div className="search-global">
            <input
              type="text"
              className="search-global__input"
              placeholder="Buscar"
            />
            <div className="search-global__icon-container">
              <img src={search} alt="" className="search-global__icon" />
            </div>
          </div>
        </div>
        <div className="global-nav__top-right-part">
          <ul className="global-nav__items">
            <li className="global-nav__item">
              <a href="#" className="global-nav__primary-link">
                <img src={group} alt="" className="global-nav__icon" />
                <span className="global-nav__primary-link-text">Comunidad</span>
              </a>
            </li>
            <li className="global-nav__item">
              <a href="#" className="global-nav__primary-link">
                <img src={message} alt="" className="global-nav__icon" />
                <span className="global-nav__primary-link-text">Mensajes</span>
              </a>
            </li>
            <li className="global-nav__item">
              <a href="#" className="global-nav__primary-link">
                <img src={bell} alt="" className="global-nav__icon" />
                <span className="global-nav__primary-link-text">
                  Notificaciones
                </span>
              </a>
            </li>
            <li className="global-nav__item">
              <a href="#" className="global-nav__primary-link">
                <img src={profile} alt="" className="global-nav__icon" />
                <span className="global-nav__primary-link-text">Home</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;