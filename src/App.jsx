import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MovieCard } from "./pages/MovieCard";
import { MoviesList } from "./pages/MoviesList";
import { MovieInfo } from "./pages/MovieInfo";
import { PageNotFound } from "./pages/PageNotFound";
export const App = () => {
  return (

    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie-card" element={<MovieCard />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
};
