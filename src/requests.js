const API_Key = "bb895df3991fae5173bbe43d4afe5e76";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_Key}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMOvies: `/discover/movie/?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_Key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie/?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_Key}&with_genres=99`
}

export default requests