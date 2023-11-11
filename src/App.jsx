import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Movies } from "./components/Movies";
import { MoviesList } from "./components/MoviesList";

export const App = () => {
  return (

    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>        
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
};
