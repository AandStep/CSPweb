import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function Form({ Theme }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Массив допустимых MIME-типов или проверок с регулярными выражениями
    const allowedTypes = [
      /^image\//, // все изображения
      /^text\//, // любые текстовые файлы (txt, html, csv и т.п.)
      "application/msword", // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      "application/vnd.oasis.opendocument.text", // .odt
      "application/rtf", // .rtf
    ];

    // Функция проверки, соответствует ли MIME-тип одного из разрешённых значений
    const isAllowedType = allowedTypes.some((allowedType) => {
      if (typeof allowedType === "string") {
        return selectedFile.type === allowedType;
      } else if (allowedType instanceof RegExp) {
        return allowedType.test(selectedFile.type);
      }
      return false;
    });

    if (selectedFile && isAllowedType) {
      setFile(selectedFile);
    } else {
      alert(
        "Пожалуйста, выберите изображение, текстовый файл или документ (например, txt, doc, docx, odt, rtf и др.)."
      );
    }
  };

  return (
    <form className={Theme === "dark" ? "form form-dark" : "form"}>
      <div>
        <input
          className={
            Theme === "dark" ? "form__input form-dark__input" : "form__input"
          }
          type="text"
          placeholder="Ваше имя *"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <input
          className={
            Theme === "dark" ? "form__input form-dark__input" : "form__input"
          }
          type="email"
          placeholder="Почта *"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          className={
            Theme === "dark" ? "form__input form-dark__input" : "form__input"
          }
          type="tel"
          placeholder="Номер телефона"
          {...register("phone")}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <textarea
          className={
            Theme === "dark"
              ? "form__textarea form-dark__textarea"
              : "form__textarea"
          }
          placeholder="Опишите вашу задачу"
          {...register("taskDescription")}
        ></textarea>
      </div>
      <div className="form__btns">
        <div>
          <button
            className={
              Theme === "dark"
                ? "button-second"
                : "button-second button-second-form"
            }
            type="button"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <p>Тех. задание</p>
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*, text/*, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
          />
        </div>

        <button
          className={
            Theme === "dark" ? "form__button button" : "form__button button-alt"
          }
          type="submit"
        >
          <p>Оставить заявку</p>
        </button>
      </div>
      <div>
        <label
          className={
            Theme === "dark" ? "form__label form-dark__label" : "form__label"
          }
        >
          <input type="checkbox" {...register("agreement")} />
          <span className="custom-checkbox"></span>
          <p>
            Отправляя свои данные вы соглашаетесь с политикой конфиденциальности
          </p>
        </label>
        {errors.agreement && <p>{errors.agreement.message}</p>}
      </div>
    </form>
  );
}
