import axios from "axios";

export default axios.create({
    baseURL: "https://escobedo-server.herokuapp.com/"
});