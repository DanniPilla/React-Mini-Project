import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyThemeContext } from '../context/MyThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar() {
const {theme} = useContext(MyThemeContext);

return (
<nav 
  className="NavBar fixed top-0 w-full  flex justify-between items-center shadow-md bg-white">
  <ul className="flex justify-center space-x-4 py-4">
    <li><NavLink to="/" className="px-4 uppercase hover:text-gray-500" >Home</NavLink></li>
    <li><NavLink to="/anime" className="px-4 uppercase hover:text-gray-500" >Anime</NavLink></li>
    <li><NavLink to="/favourites" className="px-4 uppercase hover:text-gray-500" >Favourites</NavLink></li>
    <li><NavLink to="/posts" className="px-4 uppercase hover:text-gray-500" >Posts</NavLink></li>
   
  </ul>
   <ThemeSwitcher/>
</nav>
)
}