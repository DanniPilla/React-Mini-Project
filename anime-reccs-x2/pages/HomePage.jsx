

import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";


// save as pages/PostsPage.jsx
export default function HomePage(){
   const { theme } = useContext(MyThemeContext);
 return (
    <div
      className="w-full min-h-screen  flex flex-col justify-center "
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <h1 className="text-center mt-[5rem]">
       Welcome to AnimeFinder!
      </h1>
  <p className="text-center mt-[2rem]">
        Discover your favorite anime, explore genres, and build your watchlist.
        Dive into the world of anime with just a few clicks!
      </p>
      <img className="mt-[2rem] max-w-full h-auto" src="https://64.media.tumblr.com/6fb49796364519b50627ef20d1ee9bfd/989ae70bbd8fd464-61/s500x750/bf1ba1d902fe3b62ef611e4ecee843fa8417cdeb.gifv"/>
    </div>
  );
}