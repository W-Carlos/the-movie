import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIKey } from "../../config/key";
import { Link } from "react-router-dom";
import Movie from "../../assets/movie.png"

import { Container, Header, ListOfMovie, ListItem } from "./styles";

const Home = () => {

  const [movies, setMovies] = useState([])
  const image_url = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    // Consumindo a API 
    async function fetchMovies() {
      const {data: popularMovies} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)

      console.log(popularMovies)

      setMovies(popularMovies.results)

    }

    fetchMovies()
    
  }, [movies])

  return (

      <Container>
        <Header>
          <img src={Movie} alt="movie-icon" className="movieIcon" />
          <h1>The Movie</h1>
        </Header>

        <ListOfMovie>
          
          {movies.map((movie) => (

              <ListItem key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img src={`${image_url}${movie.poster_path}`} alt={movie.title} />
                </Link>
                <span>{movie.title}</span>
              </ListItem>

          ))}

        </ListOfMovie>
      </Container>
    
  )

}

export default Home