import React,{useState,createContext} from 'react'

export const MovieContext = createContext();

function MovieProvider(props) {
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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
