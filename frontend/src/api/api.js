import axios from "axios";

const api = axios.create({
  baseURL: "https://bazar-josy.onrender.com", // Cambia la URL a la de tu backend en Render
});

export default api;
