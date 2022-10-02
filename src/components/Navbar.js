import { React, useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [res, setRes] = useState([]);
  const getRes = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f7a7d0712c8ab39d13c7dc8e96d307fd&language=en-US"
      );
      console.log(response);
      setRes(response.data.genres);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRes();
  }, []);

  console.log("res" + res);

  return (
    <div className="genres">
      <form>
        <label for="Gerne">Movies</label>
        <select name="cars" id="cars">
          {res.map((genre) => (
            <option value={`${genre.name}`}>{genre.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Navbar;
