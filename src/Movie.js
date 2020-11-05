import React from 'react'

function Movie({name,price,country}) {
    return (
        <div>
            <h3>{name}(<span>{country}</span>)</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movie