import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [featured, setFeatured] = useState(null);

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3000";

  useEffect(() => {
    axios.get(`${API_BASE}/movies`)
      .then(res => {
        setMovies(res.data);
        setFeatured(res.data[0]); // first movie as banner
      })
      .catch(err => console.error(err));
  }, []);

  const watchMovie = (id) => {
    window.open(`${API_BASE}/watch/${id}`);
  };

  return (
    <div className="app">

      {/* HERO SECTION */}
      {featured && (
        <div className="hero">
          <img src={featured.image} alt={featured.title} />
          <div className="hero-content">
            <h1>{featured.title}</h1>
            <p>{featured.description}</p>
            <button onClick={() => watchMovie(featured.id)}>▶ Watch Now</button>
          </div>
        </div>
      )}

      {/* MOVIE GRID */}
      <h2 className="section-title">Trending Movies</h2>

      <div className="grid">
        {movies.map(movie => (
          <div key={movie.id} className="card">
            <img src={movie.image} alt={movie.title} />
            <div className="card-info">
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
              <button onClick={() => watchMovie(movie.id)}>
                ▶ Watch
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;