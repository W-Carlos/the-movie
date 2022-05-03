import styled from "styled-components";

export const Container = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
`

export const ContainerMovie = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 350px;
        border-radius: 1rem;
    }
`

export const MovieDetails = styled.div `
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 4rem;
    max-width: 50%;

    h1 {
        margin: 2rem 0;
    }

    .overview {
        line-height: 130%;
        font-size: 1.1rem;
    }

    .launch {
        margin-top: 1rem;
        opacity: 0.5;
    }

`

export const Button = styled.button `
    background: #F40612;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.8rem 2rem;
    border-radius: 1rem;
    font-size: 100%;
    margin-top: 1rem;

    transition: all 0.3s;

    &:hover {
        background: #f22b35;
    }

    &:active {
        opacity: 0.6;
    }
`