import React, { useState } from "react";
import HeaderBurger from "./HeaderBurger";

export default function HeaderLinksDesktop({ headerLinks, burgerLinks }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };
  return (
    <>
      {/* Вывод матрицы */}
      {headerLinks.map(([linkName, link], index) => (
        <a key={index} href={link} className="header__link">
          {linkName}
        </a>
      ))}
      <div
        onClick={toggleMenu}
        className={`header__link header__burger-btn ${
          isBurgerOpen ? "active" : ""
        }`}
      >
        <span></span>
      </div>
      <HeaderBurger
        burgerLinks={burgerLinks}
        isBurgerOpen={isBurgerOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}
