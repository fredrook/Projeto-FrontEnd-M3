import axios from "axios";

const api = axios.create({
  baseURL:
    "postgresql://postgres:70461E3q6IF3KiwDf7ov@containers-us-west-38.railway.app:5620/railway",
  timeout: 5000, // 5 segundos
});

export default api;