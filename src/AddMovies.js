import React,{useState} from 'react'

function AddMovies() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [country, setCountry] = useState('');


    const updateName = e =>{
        setName(e.target.value);
    };
    const updatePrice = e =>{
        setPrice(e.target.value);
    };
    // const updateCountry = e =>{
    //     setCountry(e.target.value);
    // };

    return (
        <div>
            <form>
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
               {/* <input 
                    type="text" 
                    name="country"
                    value={country}
                    onChange={updateCountry}
                /> */}
                <button>Submite</button>
            </form>
        </div>
    )
}

export default AddMovies
