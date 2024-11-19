
import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";


// save as pages/PostsPage.jsx
export default function FavouritesPage(){
   const { theme } = useContext(MyThemeContext);
 return (
    <div
       className="w-full min-h-screen  "
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <h1 className="pl-6 text-8xl font-extrabold drop-shadow-lg text-pink-400 text-center mt-[5rem]">
        Favourites
      </h1>
  
    </div>
  );
}