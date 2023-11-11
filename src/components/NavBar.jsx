import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (

    <nav>
      <h1>Movies</h1>
      <ul>
       <li><NavLink to="/">Home to movie list</NavLink> </li>
       <li><NavLink to="/movies">Movie</NavLink> </li>
      </ul>
    </nav>
  )
}
