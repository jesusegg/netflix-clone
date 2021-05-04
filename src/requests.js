const API_Key = "bb895df3991fae5173bbe43d4afe5e76";

const requests = {
  fetchTrending: `/movie/popular?api_key=${API_Key}&language=en-US&page=2`,
  fetchNetflixOriginals: `/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
  fetchActionMOvies: `/movie/popular?api_key=${API_Key}&language=en-US&page=3`,
  fetchComedyMovies: `/movie/popular?api_key=${API_Key}&language=en-US&page=4`,
  fetchHorrorMovies: `/movie/popular?api_key=${API_Key}&language=en-US&page=7`,
  fetchRomanceMovies: `/movie/popular?api_key=${API_Key}&language=en-US&page=5`,
  fetchDocumentaries: `/movie/popular?api_key=${API_Key}&language=en-US&page=6`,
};
//https://api.themoviedb.org/3/movie/popular?api_key=bb895df3991fae5173bbe43d4afe5e76&language=en-US&page=1
export default requests;
