import React from "react";
import PageTitle from "../PageTitle/PageTitle";

export default function OurServices() {
  const servicesList = [
    [
      "landing page",
      "Лэндинг – одностраничный сайт, идеально подойдет для портфолио, промо-страницы вашей компании или рекламы продукта",
      "10.000р.",
    ],
    [
      "online shop",
      "Интернет-магазин – сайт с системой оплаты для вашего бизнеса. Удобный каталог, корзина товаров и промо страницы товаров выведут ваши продажи на новый уровень!",
      "120.000р.",
    ],
    [
      "ui/ux design",
      "UI/UX дизайн – логотипы, брендинг, баннеры, рекламы для соц-сетей. Все что нужно для эффективного продвижения вашего личного бренда ",
      "5.000р.",
    ],
  ];
  return (
    <section className="our-services">
      <div className="container">
        <PageTitle titleTxt="наши услуги" titleTheme="dark" />
      </div>
      <div className="container">
        <div className="our-services__wrapper">
          {servicesList.map(
            ([serviceName, serviceDescription, servicePrice], index) => (
              <div
                style={{
                  backgroundImage: `url(/images/impGR-${index + 1}.svg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                key={index}
                className="our-services__item"
              >
                <h2 className="our-services__name">{serviceName}</h2>
                <p className="our-services__description">
                  <strong>{serviceDescription.split(" – ")[0]}</strong> –{" "}
                  {serviceDescription.split(" – ")[1]}
                </p>
                <p className="our-services__price">
                  цена от: <span>{servicePrice}</span>
                </p>
                <button className="our-services__button button-alt">
                  <p>заказать</p>
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
