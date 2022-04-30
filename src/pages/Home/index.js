import React from "react";

import { Container, ListOfMovie, ListItem } from "./styles";

const App = () => {

  const movies = [
    {
      id: 1,
      title: 'Injustice',
      image_url: "https://img.elo7.com.br/product/zoom/2F5195B/poster-impresso-avengers-design.jpg"
    },
    {
      id: 2,
      title: 'Batman',
      image_url: "https://img.elo7.com.br/product/zoom/2F5195B/poster-impresso-avengers-design.jpg"
    },
    {
      id: 3,
      title: 'Spider-Man',
      image_url: "https://img.elo7.com.br/product/zoom/2F5195B/poster-impresso-avengers-design.jpg"
    },
  ]

  return (

      <Container>
        <h1>The Movie</h1>

        <ListOfMovie>
          
          {movies.map((movie) => (

              <ListItem key={movie.id}>
                <a href="https://google.com">
                  <img src={movie.image_url} alt={movie.title} />
                </a>
                <span>{movie.title}</span>
              </ListItem>

          ))}

        </ListOfMovie>
      </Container>
    
  )

}

export default App