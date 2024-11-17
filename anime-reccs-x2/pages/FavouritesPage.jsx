
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
      <h1 className="text-center mt-[5rem]">
       Favourites
      </h1>
  
    </div>
  );
}