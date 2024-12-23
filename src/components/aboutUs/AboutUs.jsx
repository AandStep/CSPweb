import React, { useRef, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";

export default function AboutUs() {
  // обязательно для длинных предложений ставить "/n" максимальное количество слов - 3, за неким исключением
  const AdvantageItems = [
    ["24/7", "Поддержка", "оперативное решение ваших /n задач в любое время"],
    ["3", "Года опыта ", "в сфере /n веб-разработки"],
    ["100%", "Индивидуальный подход", "к каждому проекту /n и клиенту"],
    ["6", "Лучших", "разработчиков /n в нашей команде"],
  ];

  const scrollableRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollableRef.current.offsetLeft);
    setScrollLeft(scrollableRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return; // Если не нажато, выходим
    e.preventDefault();
    const x = e.pageX - scrollableRef.current.offsetLeft;
    const walk = x - startX; // Скорость прокрутки
    scrollableRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <PageTitle titleTxt="о нас" titleTheme="dark" />
      </div>
      <div className="container">
        <div className="about-us__wrapper">
          <h1 className="about-us__title">
            <span>CSP</span> – студия разработки дизайна и веб-приложений. Мы
            создаем уникальные решения для каждого клиента
          </h1>
          <div
            ref={scrollableRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="about-us__advantages advantages"
          >
            {AdvantageItems.map((advantage, index) => {
              const [number, title, description] = advantage;
              const desc = description.split("/n");

              return (
                <div className="advantages__item" key={index}>
                  <p className="advantages__number">{number}</p>
                  <div className="advantages__description">
                    <p className="advantages__title">{title}</p>
                    <p className="advantages__sub-title">
                      {desc[0]}
                      <br />
                      {desc[1]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
