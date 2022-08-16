import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  // const { isLoading, data } = useQuery("super-heros", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // });

  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["super-heros"],
    fetchSuperheroes,
    {
      cacheTime: 5000
    }
  );

  console.table({ isLoading, isFetching });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>RQ Superheroes</h1>
      <ul>
        {data?.data.map((superHero) => (
          <li key={superHero.id}>{superHero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperHeroes;
