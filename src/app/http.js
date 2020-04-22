import axios from "axios";

export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const http = axios.create({
  baseURL: apiBaseUrl,
});

export default http;
