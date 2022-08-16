import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  // const { isLoading, data } = useQuery("super-heros", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // });

  const { isLoading, data } = useQuery("super-heros", fetchSuperheroes);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
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
