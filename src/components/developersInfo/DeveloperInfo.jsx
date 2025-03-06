import React from "react";
import PageTitle from "../PageTitle/PageTitle";

import htmlIcon from "/images/html-icon.png";
import reactIcon from "/images/react-icon.png";
import jsIcon from "/images/js-icon.png";
import jqueryIcon from "/images/jquery-icon.png";
import cssIcon from "/images/css-icon.png";
import scssIcon from "/images/scss-icon.png";

import bitrixIcon from "/images/1c-bitrix-icon.png";
import ajaxIcon from "/images/ajax-icon.png";
import phpIcon from "/images/php-icon.png";
import djangoIcon from "/images/django-icon.png";
import mysqlIcon from "/images/mysql-icon.png";
import restApiIcon from "/images/rest-api-icon.png";

export default function DeveloperInfo() {
  const frontEndStackItems = [
    { name: "HTML", imgSrc: htmlIcon },
    { name: "ReactJS", imgSrc: reactIcon },
    { name: "JavaScript", imgSrc: jsIcon },
    { name: "jQuery", imgSrc: jqueryIcon },
    { name: "CSS", imgSrc: cssIcon },
    { name: "SCSS", imgSrc: scssIcon },
  ];

  const backEndStackItems = [
    { name: "1С-Битрикс", imgSrc: bitrixIcon },
    { name: "Ajax", imgSrc: ajaxIcon },
    { name: "PHP", imgSrc: phpIcon },
    { name: "Django", imgSrc: djangoIcon },
    { name: "MySQL", imgSrc: mysqlIcon },
    { name: "REST API", imgSrc: restApiIcon },
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
