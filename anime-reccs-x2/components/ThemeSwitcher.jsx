import { useContext } from "react";
import {MyThemeContext, themes} from '../context/MyThemeContext'

function ThemeSwitcher() {
  const { theme, setTheme, darkMode } = useContext(MyThemeContext);

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };


    return(
           <button 
           style={{background: theme.background, color: theme.foreground}}
           onClick = {toggleTheme}> 
           Switch Theme {darkMode ? "Light" : "Dark"}

           </button>
    )
}
export default ThemeSwitcher