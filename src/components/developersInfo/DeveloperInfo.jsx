import React from "react";
import PageTitle from "../PageTitle/PageTitle";

export default function DeveloperInfo() {
  const frontEndStackItems = [
    { name: "HTML", imgSrc: "/images/html-icon.png" },
    { name: "ReactJS", imgSrc: "/images/react-icon.png" },
    { name: "JavaScript", imgSrc: "/images/js-icon.png" },
    { name: "jQuery", imgSrc: "/images/jquery-icon.png" },
    { name: "CSS", imgSrc: "/images/css-icon.png" },
    { name: "SCSS", imgSrc: "/images/scss-icon.png" },
  ];

  // Массив с данными для бэкенд технологий
  const backEndStackItems = [
    { name: "1С-Битрикс", imgSrc: "/images/1c-bitrix-icon.png" },
    { name: "Ajax", imgSrc: "/images/ajax-icon.png" },
    { name: "PHP", imgSrc: "/images/php-icon.png" },
    { name: "Django", imgSrc: "/images/django-icon.png" },
    { name: "MySQL", imgSrc: "/images/mysql-icon.png" },
    { name: "REST API", imgSrc: "/images/rest-api-icon.png" },
  ];

  // Сортировка фронтенд технологий по количеству символов в name
  const sortedFrontEndStackItems = frontEndStackItems.sort(
    (a, b) => a.name.length - b.name.length
  );

  // Сортировка бэкенд технологий по количеству символов в name
  const sortedBackEndStackItems = backEndStackItems.sort(
    (a, b) => a.name.length - b.name.length
  );

  // Массив с данными о разработчиках
  const developers = [
    {
      title: "Front-end разработчик",
      skills:
        "кросс-браузерная верстка, адаптивная верстка, БЭМ, flex-box, grid, командная работа",
      stack: sortedFrontEndStackItems,
    },
    {
      title: "Back-end разработчик",
      skills:
        "разработка API, работа с базами данных, серверная логика, безопасность приложений",
      stack: sortedBackEndStackItems,
    },
  ];

  return (
    <section id="developers-info" className="developers-info">
      <div className="container">
        <PageTitle titleTxt="разработчики" titleTheme="dark" />
      </div>
      <div className="container">
        <div className="developers-info__wrapper">
          {developers.map((developer, index) => (
            <div className="developer" key={index}>
              <h1 className="developer__title">{developer.title}</h1>
              <div className="developer__info-block skills">
                <div className="developer__subtitle">Навыки</div>
                <p className="skills__txt">{developer.skills}</p>
              </div>
              <div className="developer__info-block stack">
                <div className="developer__subtitle">Стэк</div>
                <div className="stack__wrapper">
                  {developer.stack.map((item, stackIndex) => (
                    <div className="stack__item" key={stackIndex}>
                      <img
                        src={item.imgSrc}
                        alt={item.name}
                        className="stack__img"
                      />
                      <p className="stack__name">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
