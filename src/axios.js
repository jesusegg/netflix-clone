import axios from "axios";

//url base para hacer los requests a la base de datos
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//instance.get("/foo-bar");
//https://api.themoviedb.org/3/foo-bar

export default instance;
