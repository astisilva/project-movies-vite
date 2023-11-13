import { NavLink } from "react-router-dom"
import HomeIcon from '../assets/home-icon.svg'
import '../styles/style.css'; 


export const NavBar = () => {
  return (

    <nav>
      <ul>      
       <li><NavLink to="/"> <img className="home-icon" src={HomeIcon} alt="Home-icon" />Movies</NavLink> </li>
      </ul>
    </nav>
  )
}
