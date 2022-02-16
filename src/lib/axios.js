import axios from "axios";

const axiosIns = axios.create({ baseURL: "https://api2.binance.com/api/v3" });


export default axiosIns