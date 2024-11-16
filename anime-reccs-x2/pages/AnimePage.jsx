// import { Outlet, useParams, Link } from "react-router-dom";
// import { useData } from "../hooks/useData"
// import { useSearchParams } from "react-router-dom";
import AnimeSearch from "../components/AnimeSearch";
import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";


// save as pages/PostsPage.jsx
export default function AnimePage() {
   const { theme } = useContext(MyThemeContext);
 return (
    <div
      className="w-full h-screen  "
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <h1 className="text-center mt-[5rem]">
        Anime
      </h1>
      <AnimeSearch />
    </div>
  );
}