import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { APIKey } from "../../config/key";
import axios from "axios";

import {Container, ContainerMovie, MovieDetails, Button} from './styles'

const Details = () => {

    const { id } = useParams()
    console.log(id)

    const [movie, setMovie] = useState({})
    const image_url = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        // Consumindo a api 
        async function fetchMovies() {
            const {data: popularMovies} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR&page=1`)
      
            console.log(popularMovies)

           const movie = {
                id,
                title: popularMovies.title,
                sinopse: popularMovies.overview,
                image: `${image_url}${popularMovies.poster_path}`,
                releaseDate: popularMovies.release_date
            }
      
            console.log(movie)
           setMovie(movie)
      
          }
      
          fetchMovies()
    }, [id]) 


    return (
        <Container>

            <ContainerMovie>
                <img src={movie.image} alt={movie.title}/>
                <MovieDetails>
                    <h1>{movie.title}</h1>
                    <p className="overview">{movie.sinopse}</p>
                    <p className="launch">Data de lançamento: {movie.releaseDate}</p>
                    <Link to="/">
                        <Button>Voltar</Button>
                    </Link>
                </MovieDetails>
            </ContainerMovie>

        </Container>
    )
}

export default Details