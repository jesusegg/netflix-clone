import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"; //cuando es un archivo normal solo se escribe el la ruta sin el nombre
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow, ref }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // ajustar un fragmento de código  en función de una condición o variable específica
  useEffect(() => {
    //if [], run one when the row load, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // "https://api.themoviedb.org/3/trending/all/week?api_key=${API_Key}$language=en-US"
      //console.log(request.data.results)

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]); //siempre que se introduzca una variable en el useEffect que venga de afuera se debe colocar en el array
  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // console.log(movies);
  const handleClick = (movie) => {
    console.log(trailerUrl);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //console.log(movie);
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //una busca el substring del url y el otro crea una funcion con el parametro get para buscar todo lo del url despues de la v
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {/* <div id="row"> */}

      <div className="row" ref={ref}>
        {/* container -> posters */}

        {/*titulo de la fila*/}
        <h2>{title}</h2>

        {/*several row_posters*/}
        <div className="row_posters">
          {movies
            ? movies.map((movie) => (
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`} // (expr1 && expr2) Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              ))
            : console.log("error")}
        </div>
        {/* {codigo para mostrar trailer de youtube} */}
        {trailerUrl && (
          <Youtube className="youtube" videoId={trailerUrl} opts={opts} />
        )}
        {/* false && variable = false  true && variable = variable */}
      </div>

      {/* </div> */}
    </>
  );
}

export function RowLazy({ title, fetchURL, isLargeRow, id }) {
  const [show, setShow] = useState("");
  useEffect(() => {
    const onChange = (entries) => {
      const el = entries;
      console.log(entries, "entries");
      entries.forEach((ele) => {
        if (ele.isIntersecting) {
          setShow(id);
        }
      });
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "10px",
    });

    observer.observe(document.querySelector(`#${id}`));
  }, [id]);
  console.log(show);
  console.log(document.querySelector(`#${id}`));
  return (
    <div id={`${id}`}>
      {show === id && (
        <Row title={title} fetchURL={fetchURL} isLargeRow={isLargeRow} />
      )}
    </div>
  );
}

export default Row;
