import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const getMovies = async () => {
    // const json = await (
    //   await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    // ).json();
    // console.log(json);

    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  });

  return <h1>Deatil</h1>;
}

export default Detail;
