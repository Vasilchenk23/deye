import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

export const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
};

  return (
    <>
      <header className="header" id='header'>
        <div className="logo-item">
          <img src="./images/logo.png" alt="Logo" />
        </div>
        <div className={`item-menu ${menuOpen ? "menu-open" : ""}`}>
          <h1 onClick={() => scrollToSection('header')}>Головна</h1>
          <h1 onClick={() => scrollToSection('solution')}>Рiшення</h1>
          <h1 onClick={() => scrollToSection('goods')}>Продукцiя</h1>
          <h1 onClick={() => scrollToSection('contact')}>Контакти</h1>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? (
            <IoClose size={40}/>
          ) : (
            <IoMdMenu size={40}/>
          )}
        </button>
      </header>
    </>
  );
};
