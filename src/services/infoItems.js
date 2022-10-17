import axios from "axios";
import Nprogress from "nprogress";

axios.defaults.baseURL = "http://localhost:1337/api";

axios.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});
axios.interceptors.response.use((response) => {
  Nprogress.done();
  return response;
});

export default {
  signIn(user) {
    return axios.post("/auth/local", user);
  },
  getData() {
    return axios.get("/posts?populate=image");
  },
  changeLikeToggle(id, data) {
    return axios.put(`/posts/${id}`, data);
  },
};
