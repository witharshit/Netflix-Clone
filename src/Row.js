import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "http://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          const link = urlParams.get("v");
          if (link.length > 0) {
            setTrailerUrl(urlParams.get("v"));
          } else {
            setTrailerUrl(urlParams.get("search_query"));
          }
          //  setTrailerUrl(url);
          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "1900",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="rowposters">
        {movies.map((movie) => (
          <img
            className={`rowposter ${props.isLargeRow && "rowposterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl && (
        <YouTube className="trailer" videoId={trailerUrl} opts={opts}></YouTube>
      )}
    </div>
  );
}

export default Row;
