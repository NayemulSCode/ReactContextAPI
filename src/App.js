import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import MovieProvider, {MovieContext} from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
    
  );
}

export default App;
