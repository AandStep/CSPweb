import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";
import FooterLinkItem from "./FooterLinkItem";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const footerData = [
    {
      title: "Россия",
      items: [{ type: "text", content: "Новосибирск" }],
    },
    {
      title: "Ссылки",
      items: [
        { type: "link", content: "Главная", href: "#" },
        { type: "link", content: "О нас", href: "#about-us" },
        { type: "link", content: "Разработка", href: "" },
        { type: "link", content: "Наши проекты", href: "#our-projects" },
        { type: "link", content: "Оставить заявку", href: "#leave-request" },
      ],
    },
    {
      title: "CSP",
      items: [
        {
          type: "link",
          content: "+7 (995) 572 12-48",
          href: "tel:+79955721248",
        },
        {
          type: "link",
          content: "csp.web.dev@gmail.com",
          href: "mailto:csp.web.dev@gmail.com",
        },
        {
          type: "image",
          src: "/images/telegram-footer.svg",
          alt: "",
          href: "https://t.me/and_step",
        },
      ],
    },
  ];

  return (
    <section className="footer section-footer">
      <div className="container">
        <PageTitle titleTxt="контакты" titleTheme="light" />
      </div>
      <div className="container">
        <div className="footer__wrapper">
          <>
            {isMobile ? (
              <div className="footer__links">
                {footerData.map((item, index) => (
                  <FooterLinkItem
                    key={index}
                    title={item.title}
                    items={item.items}
                  />
                ))}
                <img
                  src="/images/csp-logo-footer.svg"
                  alt=""
                  className="footer__logo"
                />
              </div>
            ) : (
              <>
                <div className="footer__links">
                  {footerData.map((item, index) => (
                    <FooterLinkItem
                      key={index}
                      title={item.title}
                      items={item.items}
                    />
                  ))}
                </div>
                <img
                  src="/images/csp-logo-footer.svg"
                  alt=""
                  className="footer__logo"
                />
              </>
            )}
          </>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p className="footer__copyright-txt">
            Designed and Produced by CSP @2024-2024
          </p>
        </div>
      </div>
    </section>
  );
}
