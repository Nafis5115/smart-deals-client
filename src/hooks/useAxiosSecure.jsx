import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    console.log(config.headers.authorization);
    return config;
  });
  return instance;
};

export default useAxiosSecure;
