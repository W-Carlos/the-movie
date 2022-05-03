import styled from 'styled-components'

export const Container = styled.div `

   h1 {
       text-align: center;
       margin: 4rem 0;
   }
`

export const ListOfMovie = styled.ul `

   list-style: none;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   column-gap: 3rem;
   row-gap: 4rem;

`
export const ListItem = styled.li `

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   img {
       width: 190px;
       border-radius: 1rem;
       margin-bottom: 2rem;
   }

   span {
       font-weight: bold;
       font-size: 130%;
       text-align: center;
       margin-bottom: 2rem;
   }

   a {
       transition: all 0.3s;
   }

   a:hover {
       transform: scale(1.1);
   }

`