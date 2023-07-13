import axios from "axios";

const API = axios.create({
    baseURL:"https://devcamperserveapi.vercel.app/api/v1"
})
export default API;