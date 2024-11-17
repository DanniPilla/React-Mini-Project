import useAnimeSearch from '../hooks/useAnimeSearch'
import AnimeCard from './AnimeCard';
import { useSearchParams,  } from "react-router-dom";
import { useState } from 'react';
import useGenres from "../hooks/useGenres";
  
const AnimeSearch = () => {
        const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.get('size')? searchParams.get('size') : 10;
    const { animeData, searchTerm, setSearchTerm, loading, genre, setGenre } = useAnimeSearch(size);
  const { genres, loading: genresLoading, setGenres } = useGenres();
  

    const handleChangeSize = (e) => {
        setSearchParams({size: e.target.value})
    }

console.log("Data passed to AnimeCard:", animeData);
    return (
        <div className="anime-search-container p-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for an Anime"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <select
                value={size}
                onChange={handleChangeSize}
                className="p-2 border border-gray-300 rounded mb-4"
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      >
<option value="">All Genres</option>
        {!genresLoading && genres.map((genre) => (
           <option key={[]} value={genre}>
    {genre}
  </option>
        ))}

      </select>
            {loading && <p>Loading...</p>}
            <div className="anime-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {animeData.map((anime) => (
                    <AnimeCard key={anime._id || anime.id} anime={anime} />
                ))}
            </div>
        </div>
    );
};

export default AnimeSearch;