import axios from "axios";
import { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [superHeroes, setSuperHeroes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setSuperHeroes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Superheroes</h1>
      <ul>
        {superHeroes.map((superHero) => (
          <li key={superHero.id}>{superHero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeroes;
