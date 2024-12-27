import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

export const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo-item">
          <img src="./images/logo.png" alt="Logo" />
        </div>
        <div className={`item-menu ${menuOpen ? "menu-open" : ""}`}>
          <h1>Головна</h1>
          <h1>Рiшення</h1>
          <h1>Продукцiя</h1>
          <h1>Контакти</h1>
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
