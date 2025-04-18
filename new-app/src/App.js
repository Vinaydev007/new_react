// import React, { useEffect, useState } from 'react';
// import './App.css';
// import MovieCard from "./component/MovieCard";

// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchLowestRatedMovies = async () => {
//       const url = 'https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies';
//       const options = {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': 'b4a85b7181mshd1f77ed4660b71fp105a70jsndf41c56b7c11',
//           'x-rapidapi-host': 'imdb236.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // use .json() instead of .text()
//         console.log("Fetched from IMDB:", result);

//         if (result && result.titles) {
//           setMovies(result.titles); // assuming result.titles holds the movie array
//         }
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchLowestRatedMovies();
//   }, []);

//   return (
//     <>
//       <div className='layout'>
//         {movies.map((item, index) => (
//           <MovieCard key={index} product={item} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App1.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLowestRatedMovies = async () => {
      const url = 'https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'b4a85b7181mshd1f77ed4660b71fp105a70jsndf41c56b7c11',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("Fetched Movies:", result);

        if (result && result.titles) {
          setMovies(result.titles);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLowestRatedMovies();
  }, []);

  return (
    <div className="layout">
      <h1>Lowest Rated Movies (IMDB)</h1>
      <div className="cards-container">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


