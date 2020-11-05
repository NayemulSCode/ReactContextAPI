import React from 'react'

function Movie({name,price,ctry}) {
    return (
        <div>
            <h3>{name}(<span>{ctry}</span>)</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movie