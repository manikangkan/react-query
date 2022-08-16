import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  // const { isLoading, data } = useQuery("super-heros", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // });

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    ["super-heros"],
    fetchSuperheroes,
    {
      // cacheTime: 5000
      // staleTime: 30000,
      // staleTime: 0, //default staleTime
      // refetchOnMount: true,
      // refetchOnMount: false,
      // refetchOnWindowFocus: true,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
      enabled: false,
    }
  );

  console.table({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return (
      <div>
        Loading... <button onClick={refetch}>Fetch superHeroes</button>
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>RQ Superheroes</h1>
      <button onClick={refetch}>Fetch superHeroes</button>
      <ul>
        {data?.data.map((superHero) => (
          <li key={superHero.id}>{superHero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RQSuperHeroes;
