import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies")
      .then(res => setMovies(res.data));
  }, []);

  const watchMovie = (id) => {
    window.open(`http://localhost:3000/watch/${id}`);
  };

  return (
    <div className="app">
      <h1>🎬 OTT Platform (Hotstar Clone)</h1>

      <div className="grid">
        {movies.map(movie => (
          <div key={movie.id} className="card">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <button onClick={() => watchMovie(movie.id)}>
              ▶ Watch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;