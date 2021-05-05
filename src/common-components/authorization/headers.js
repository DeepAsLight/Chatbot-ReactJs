import axios from "axios";

var token = localStorage.getItem('token');
axios.defaults.headers.common["Authorization"] = token;

export function getJsonHeaderWithToken() {
  return {
    "Content-Type": "application/json",
    "Authorization":  "Bearer "+token
  }
}

export function getJsonHeaderWithoutToken() {
  return {
    "Content-Type": "application/json"
  }
}
