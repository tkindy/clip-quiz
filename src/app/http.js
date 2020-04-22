import axios from "axios";

const localBaseUrl = "http://localhost:8080";
const prodBaseUrl = "https://clip-quiz-api.herokuapp.com";

const http = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? prodBaseUrl : localBaseUrl,
});

export default http;
