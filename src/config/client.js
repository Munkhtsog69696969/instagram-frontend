import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:4567/",
    headers: {
        Accept: "application/json",
        // Authorization:localStorage.getItem("token")
    }
})