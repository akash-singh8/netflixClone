import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// Base URL for movie images
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  // using usestate to store the movies data, basically movies is a variable which data can be assigned only through the setMovies function, and as the data is assigned the changes is reflected every where teh variable has been used
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  // useEffect Hook -> 1st argument is basically a callback functio and the 2nd argument is array of items, which whenever changes the callback function will be executed, and if the array is empty then the function will be executed only once.
  useEffect(() => {
    async function fetchData() {
      // when the request is made wait until it's responded
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const [trailerUrl, setTrailerUrl] = useState();

  function playTrailer(movie) {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title).then((url) => {
        console.log(url);
        setTrailerUrl(url.split("=")[1]);
      }).catch((err) => { console.log(err) });
    }
  }


  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row_posters">
        {/* serveral row posters */}

        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={baseUrl + ((isLargeRow) ? movie.poster_path : movie.backdrop_path)}
              alt={movie.name}
              className="row_poster"
              onClick={() => playTrailer(movie)}
            />
          );
        })}

      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}

export default Row;
