import axios from "axios";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const subscriberAPI = axios.create({
  baseURL: "https://maiocean.azurewebsites.net/subs",
});