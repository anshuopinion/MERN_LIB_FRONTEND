import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
  credentials: "include",
});

export default axios;
