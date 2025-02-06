import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000", // Usa import.meta.env para compatibilidad con Vite
});

export default api;
