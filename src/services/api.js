import axios from "axios";

// BASE URL: https://api.themoviedb.org/3/
// URL API filmes: /movie/now_playing?api_key=159a3ae7dfb9b27901289b32d78d593e&language=pt-BR

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'     
});

export default api;