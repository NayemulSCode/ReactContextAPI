import React,{useContext} from 'react'
import './Nac.css'
import {MovieContext} from './MovieContext'
function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (<nav className="header">
        <div className="header__nav">
            <div className="header__opton">
                Nayemul
            </div>
            <div className="header__opton">
                Movies:{movies.length}
            </div>
        </div>
    </nav>
        
    )
}

export default Nav
