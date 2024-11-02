import React from "react";
import HeaderLinksView from "./HeaderLinksView";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <a href="#" className="header__logo">
            csp
          </a>
          <nav className="header__nav">
            <HeaderLinksView />
          </nav>
        </div>
      </div>
    </header>
  );
}
