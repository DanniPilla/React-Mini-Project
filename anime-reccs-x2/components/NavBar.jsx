import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyThemeContext } from '../context/MyThemeContext'
import ThemeSwitcher from './ThemeSwitcher'
import {Heart, House, Tv, BookHeart} from "lucide-react"

export default function NavBar() {
const {theme} = useContext(MyThemeContext);

return (
<nav 
  className="NavBar sticky  top-0  w-full  flex justify-between items-center shadow-md bg-white  z-50">
   <div className="pl-6 text-2xl font-extrabold text-pink-600 drop-shadow-lg">
        <p>
          <span className="text-pink-400">Anime</span>
          <span className=" text-pink-700">Finder</span>
        </p>
      </div>
  <ul className="flex justify-center space-x-4 py-4">
    <li><NavLink to="/" className="px-4 uppercase font-bold text-pink-500 hover:text-gray-500" >
    <House className="text-lg sm:hidden" />
    <span className="hidden sm:inline">Home</span>
    
    </NavLink></li>
    <li><NavLink to="/anime" className="px-4 uppercase font-bold text-pink-500 hover:text-gray-500" >
    <Tv className="text-lg sm:hidden" />
    <span className="hidden sm:inline">Anime</span>
    
    </NavLink></li>
    
    <li><NavLink to="/favourites" className="px-4 uppercase font-bold text-pink-500 hover:text-gray-500" >
    <Heart className="text-lg sm:hidden"/>
    <span className="hidden sm:inline">Favourites</span>
    </NavLink></li>
    <li><NavLink to="/posts" className="px-4 uppercase font-bold text-pink-500  hover:text-gray-500" >
    <BookHeart className="text-lg sm:hidden" />
    <span className="hidden sm:inline">Manga</span>
    
    </NavLink></li>
   
  </ul>
   <ThemeSwitcher/>
</nav>
)
}