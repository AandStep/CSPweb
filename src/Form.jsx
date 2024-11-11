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

export default function Form() {
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
    <form className="form">
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
            Отправляя свои данные вы соглашаетесь с политикой конфиденциальности
          </p>
        </label>
        {errors.agreement && <p>{errors.agreement.message}</p>}
      </div>
    </form>
  );
}
