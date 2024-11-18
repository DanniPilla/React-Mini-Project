import useAnimeSearch from '../hooks/useAnimeSearch'
import AnimeCard from './AnimeCard';
import { useSearchParams,  } from "react-router-dom";
import { useState, useContext} from 'react';
  import {MyThemeContext} from '../context/MyThemeContext'
const AnimeSearch = () => {
        const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.get('size')? searchParams.get('size') : 10;
    const { animeData, searchTerm, setSearchTerm, loading } = useAnimeSearch(size);
const { theme } = useContext(MyThemeContext);
  

    const handleChangeSize = (e) => {
        setSearchParams({size: e.target.value})
    }
console.log("Data passed to AnimeCard:", animeData);
    return (
        <div className="anime-search-container p-4  "style={{
        backgroundColor: theme.background,
        color: theme.foreground,
       
      }}>

             <div className="flex justify-center space-x-4 mb-6">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for an Anime"
                className="p-2 border border-gray-300 rounded mb-4  text-black"
            />
            <select
                value={size}
                onChange={handleChangeSize}
                className="p-2 border border-gray-300 rounded mb-4 ml-2 text-black"
            >
                <option className="text-black"value={5}>5</option>
                <option className="text-black"value={10}>10</option>
                <option className="text-black" value={15}>15</option>
                <option className="text-black"value={20}>20</option>
            </select>
            </div>
            {loading && <p>Loading...</p>}
            {!loading && animeData.length === 0 && (
        <p>Sorry, there isn't an anime that matches your search.</p>
      )}
       {!loading && animeData.length > 0 && (
            <div className="mx-14 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {animeData.map((anime) => (
                    <AnimeCard key={anime._id || anime.id} anime={anime} />
                ))}
            </div>)}
        </div>
    );
};

export default AnimeSearch;