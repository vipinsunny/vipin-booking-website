    import axios from "axios";

    const api = axios.create({
      baseURL: "https://mern-booking-website.onrender.com",
    });

    export default api;
