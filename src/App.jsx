import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home";
import SuperHeroes from "./pages/SuperHeroes";
import RQSuperHeroes from "./pages/RQSuperHeroes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Superheroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Superheroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<SuperHeroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
