import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziemed-production.up.railway.app",
  timeout: 5000, // 5 segundos
});

export default api;
