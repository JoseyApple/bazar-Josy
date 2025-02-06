import axios from "axios";

const api = axios.create({
  baseURL: "https://bazar-josy.onrender.com", // URL de tu backend en Render
});

export default api;
