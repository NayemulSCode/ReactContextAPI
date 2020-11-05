import React,{useContext, useState} from 'react'
import { MovieContext } from './MovieContext';

function AddMovies() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ctry, setCtry] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e =>{
        setName(e.target.value);
    };
    const updatePrice = e =>{
        setPrice(e.target.value);
    };
    const addMovie = e=>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name:name, price:price}]);
    };

    const updateCtry = e =>{
        setCtry(e.target.value);
    };

    return (
        <div>
            <form onSubmit={addMovie}>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={updateName}
                />
                <input 
                    type="text" 
                    name="price"
                    value={price}
                    onChange={updatePrice}
                />
               <input 
                    type="text" 
                    name="ctry"
                    value={ctry}
                    onChange={updateCtry}
                />
                <button>Submite</button>
            </form>
        </div>
    )
}

export default AddMovies
