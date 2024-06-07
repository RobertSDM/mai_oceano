import axios from "axios";

export const subscriberAPI = axios.create({
  baseURL: "https://maiocean.azurewebsites.net/subs",
});