import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:6969",
    headers: {
        Accept: "application/json",
        token:localStorage.getItem("token")
    }
})