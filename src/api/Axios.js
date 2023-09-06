import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:8000/api/',
    baseURL: " https://tourism-app-class.onrender.com/api"

});

export default api