import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:2222/api/product/",
    headers: {
        "Content-type": "application/json"
    }
});