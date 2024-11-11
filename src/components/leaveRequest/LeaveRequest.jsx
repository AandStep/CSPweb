import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PageTitle from "../PageTitle/PageTitle";

const schema = yup.object().shape({
  name: yup.string().required("Ваше имя обязательно"),
  email: yup
    .string()
    .email("Неверный формат почты")
    .required("Почта обязательна"),
  phone: yup
    .string()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .matches(/^\+?[0-9]{10,15}$/, "Неверный номер телефона")
    .notRequired(),
  taskDescription: yup.string(),
  agreement: yup
    .bool()
    .oneOf([true], "Необходимо согласие на обработку персональных данных"),
});

export default function LeaveRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("taskDescription", data.taskDescription);
    formData.append("agreement", data.agreement);

    if (file) {
      formData.append("file", file);
    }

    // Отправка данных на сервер
    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Заявка отправлена успешно");
      } else {
        console.error("Ошибка при отправке заявки");
      }
    } catch (error) {
      console.log(formData);
      console.error("Ошибка сети:", error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile &&
      (selectedFile.type.startsWith("image/") ||
        selectedFile.type === "text/plain" ||
        selectedFile.type === "application/msword" ||
        selectedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFile(selectedFile);
    } else {
      alert(
        "Пожалуйста, выберите изображение, текстовый файл или документ Word."
      );
    }
  };

  return (
    <section className="leave-request">
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
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="form__input"
                type="text"
                placeholder="Ваше имя *"
                {...register("name")}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
              <input
                className="form__input"
                type="email"
                placeholder="Почта *"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <input
                className="form__input"
                type="tel"
                placeholder="Номер телефона"
                {...register("phone")}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div>
              <textarea
                className="form__textarea"
                placeholder="Опишите вашу задачу"
                {...register("taskDescription")}
              ></textarea>
            </div>
            <div className="form__btns">
              <div>
                <button
                  className="button-second"
                  type="button"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Тех. задание
                </button>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  accept="image/*,.txt"
                  onChange={handleFileChange}
                />
              </div>

              <button className="form__button button-alt" type="submit">
                <p>Оставить заявку</p>
              </button>
            </div>
            <div>
              <label className="form__label">
                <input type="checkbox" {...register("agreement")} />
                <span className="custom-checkbox"></span>
                <p>
                  Отправляя свои данные вы соглашаетесь с политикой
                  конфиденциальности
                </p>
              </label>
              {errors.agreement && <p>{errors.agreement.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
