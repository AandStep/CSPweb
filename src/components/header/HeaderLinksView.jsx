import React, { useState, useEffect } from "react";
import HeaderLinksMobile from "./HeaderLinksMobile";
import HeaderLinksDesktop from "./HeaderLinksDesktop";

export default function HeaderLinks() {
  // Матрица ссылок
  const headerLinks = [
    ["О нас", "#"],
    ["Разработка", "#"],
    ["Наши проекты", "#"],
  ];

  const burgerLinks = [
    ["Наши услуги", "#"],
    ["О нас", "#"],
    ["Разработка", "#"],
    ["Разработчики", "#"],
    ["Наши проекты", "#"],
    ["Контакты", "#"],
  ];

  // Переменная для смены отображения на мобильное
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Отслеживание ширины вьюпорта
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Проверка на мобильную версию */}
      {isMobile ? (
        <HeaderLinksMobile burgerLinks={burgerLinks} />
      ) : (
        <HeaderLinksDesktop
          headerLinks={headerLinks}
          burgerLinks={burgerLinks}
        />
      )}
    </>
  );
}
