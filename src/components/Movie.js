import React, { useState } from 'react';

function Movie() {
    const [movies, setMovies] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=e02cb051b208eab96d7bb061971cc794")
            .then(res => res.json())
            .then(json => setMovies(json.results));
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
            <div className="container-fluid text-center mt-4">
                <h1 style={{ color: '#343a40', fontWeight: 'bold', fontSize: '2.5rem' }}>
                    Explore the World of Movies
                </h1>
                <p style={{ color: '#6c757d', fontSize: '1.2rem', margin: '10px 0 20px' }}>
                    Discover the latest blockbusters and timeless classics right at your fingertips. 
                    Click below to unveil a world of cinematic adventures waiting for you to explore!
                </p>
                <button
                    type="button"
                    className="btn btn-dark mt-3 mb-3 px-4 py-2"
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        borderRadius: '5px',
                    }}
                    onClick={getMovie}
                >
                    Show Me the Movies
                </button>
            </div>
            <div className="row">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="col-md-3 col-6 mb-4 d-flex align-items-stretch"
                        style={{ padding: '10px' }}
                    >
                        <div
                            className="card h-100"
                            style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                                alt={movie.title}
                                className="card-img-top"
                                style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                    {movie.title}
                                </h5>
                                <p className="card-text" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                                    Release Date: {movie.release_date}
                                </p>
                                <p className="card-text" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                                    popularity: {movie.popularity}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movie;
