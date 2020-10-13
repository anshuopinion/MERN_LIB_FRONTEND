import Axios from "axios";

const axios = Axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default axios;
