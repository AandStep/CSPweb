// в config.js
export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "" // пустая строка! (для прокси)
    : "http://87.228.96.2"; // или ваш продовый URL
