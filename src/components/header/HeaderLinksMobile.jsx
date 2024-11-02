import React from "react";

export default function HeaderLinkMobile({ headerLinks }) {
  return (
    <>
      <div className="header__link header__burger-btn">
        <span></span>
      </div>
      <div className="burger-menu">
        {/* Вывод матрицы в меню бургере */}
        {headerLinks.map(([linkName, link], index) => (
          <a key={index} href={link} className="burger-menu__link">
            {linkName}
          </a>
        ))}
      </div>
    </>
  );
}
