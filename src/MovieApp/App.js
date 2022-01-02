import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year)`
    );

    // 더 간결하게 쓰는 방법
    // const json = await (
    //   await fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year)`
    //   )
    // ).json();

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <h2>
                Title : {movie.title} {movie.year ? `(${movie.year})` : null}
              </h2>
              <p>{movie.summary}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres
                  ? movie.genres.map((g) => <li key={g}>{g}</li>)
                  : "Not Found"}
              </ul>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
