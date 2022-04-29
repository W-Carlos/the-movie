import React from "react";

import { Container, ListOfMovie, ListItem } from "./styles";

const App = () => {

  return (

      <Container>
        <h1>The Movie</h1>

        <ListOfMovie>
          <ListItem>
            <a href="https://google.com">
              <img src="https://img.elo7.com.br/product/zoom/2F5195B/poster-impresso-avengers-design.jpg" alt="Poster Avengers" />
            </a>
            <span>Avengers</span>
          </ListItem>
          <ListItem>
            <a href="https://google.com">
              <img src="https://img.elo7.com.br/product/zoom/2F5195B/poster-impresso-avengers-design.jpg" alt="Poster Avengers" />
            </a>  
            <span>Avengers</span>
          </ListItem>
          <ListItem>
            <a href="https://google.com">
              <img src="https://img.elo7.com.br/product/zoom/2F5195B/poster-impresso-avengers-design.jpg" alt="Poster Avengers" />
            </a>
            <span>Avengers</span>
          </ListItem>
        </ListOfMovie>
      </Container>
    
  )

}

export default App