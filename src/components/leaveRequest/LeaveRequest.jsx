import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Form from "../../Form";

export default function LeaveRequest() {
  return (
    <section className="leave-request section-dark">
      <div className="container">
        <PageTitle titleTxt="наши услуги" titleTheme="light" />
      </div>
      <div className="container">
        <div className="leave-request__wrapper">
          <div className="leave-request__offer">
            <h1 className="leave-request__title">
              Не нашли подходящее предложение?
            </h1>
            <h3 className="leave-request__sub-title">
              оставьте заявку и наши специалисты помогут вам найти решение
            </h3>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
