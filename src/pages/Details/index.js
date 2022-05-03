import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    const { id } = useParams()

    return (
        <h1>Detalhes do filme</h1>
    )
}

export default Details