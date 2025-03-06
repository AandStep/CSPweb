import React, { useRef, useState, useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";

export default function DevelopmentProcess() {
  const wrapperRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [imageSrc, setImageSrc] = useState("/images/Development.webp");

  const handleMouseDown = (e) => {
    e.preventDefault(); // предотвращаем выделение текста
    setIsDown(true);
    wrapperRef.current.style.cursor = "grabbing";
    setStartX(e.pageX - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDown) {
      setIsDown(false);
      wrapperRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    if (isDown) {
      setIsDown(false);
      wrapperRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault(); // предотвращаем выделение текста
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = x - startX; // Увеличьте скорость прокрутки
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const updateImage = () => {
    if (window.innerWidth <= 768) {
      setImageSrc("/images/Development-m.svg");
    } else {
      setImageSrc("/images/Development.webp");
    }
  };

  useEffect(() => {
    updateImage(); // Устанавливаем изображение при первом рендере
    window.addEventListener("resize", updateImage); // Добавляем обработчик события изменения размера окна

    return () => {
      window.removeEventListener("resize", updateImage); // Удаляем обработчик при размонтировании компонента
    };
  }, []);

  return (
    <section
      id="development-process"
      className="development-process section-dark"
    >
      <div className="container">
        <PageTitle titleTxt="разработка" titleTheme="light" />
      </div>

      <div
        className="development-process__wrapper"
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ overflowX: "scroll", cursor: "grab", userSelect: "none" }}
      >
        <img
          src={imageSrc} // Используем динамическое значение для src
          alt=""
          className="development-process__img"
        />
      </div>
    </section>
  );
}
