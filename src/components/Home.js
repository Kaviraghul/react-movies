import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchCollections = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f7a7d0712c8ab39d13c7dc8e96d307fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
      );
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((collection) => (
        <img
          className="movie-image"
          src={"https://image.tmdb.org/t/p/w500/" + collection.backdrop_path}
        />
      ))}
    </div>
  );
}
