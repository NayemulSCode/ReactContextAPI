import React, {useState} from 'react'

function MovieList(){
    const [movies, setMovies] = useState([
        {
            name:"Yusufe Julekha",
            price:"1000",
            id:10001,
            realiseDate:"1999",
            country:"Turkis"
        },
        {
            name:"Sultan Suleiman",
            price:"1050",
            id:10002,
            realiseDate:"1980",
            country:"Turkis"
        },
        {
            name:"I Have Power",
            price:"500",
            id:10003,
            realiseDate:"2005",
            country:"Bangladesh"
        }

    ])
    return (
        <div>
            {movies.map(movie =>(
                <li>{movie.name}</li>
            ))}
        </div>
    )
}

export default MovieList
