import axios from "axios";
import { API } from "./constants";

export const api = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});