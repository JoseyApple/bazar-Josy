const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://bazar-josy-production.up.railway.app",
});

console.log("Base URL:", import.meta.env.VITE_BACKEND_URL);
export default api;

