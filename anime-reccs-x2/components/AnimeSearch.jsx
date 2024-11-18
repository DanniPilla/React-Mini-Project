import useAnimeSearch from '../hooks/useAnimeSearch'
import AnimeCard from './AnimeCard';
import { useSearchParams,  } from "react-router-dom";
import { useState } from 'react';
  
const AnimeSearch = () => {
        const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.get('size')? searchParams.get('size') : 10;
    const genre = searchParams.get('genres')? searchParams.get('genres') : null;
    const { animeData, searchTerm, setSearchTerm, loading } = useAnimeSearch(size, genre);
  
  

    const handleChangeSize = (e) => {
        setSearchParams({size: e.target.value})
    }
    const handleChangeGenre = (e) => {
        setSearchParams({genres: e.target.value})
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
        onChange={handleChangeGenre}
        className="p-2 border border-gray-300 rounded mb-4"
      >
 <option placeholder="Genres"></option>
<option value="Award Winning">Award Winning</option>
<option value="Action">Action</option>
<option value="Suspense">Suspense</option>
<option value="Horror">Horror</option>
<option value="Ecchi">Ecchi</option>
<option value="Avant Garde">Avant Garde</option>
<option value="Sports">Sports</option>
<option value="Supernatural">Supernatural</option>
<option value="Fantasy">Fantasy</option>
<option value="Gourmet">Gourmet</option>
<option value="Boys Love">Boys Love</option>
<option value="Drama">Drama</option>
<option value="Comedy">Comedy</option>
<option value="Mystery">Mystery</option>
<option value="Girls Love">Girls Love</option>
<option value="Slice of Life">Slice of Life</option>
<option value="Adventure">Adventure</option>
<option value="Romance">Romance</option>
<option value="Sci-Fi">Sci-Fi</option>
<option value="Erotica">Erotica</option>
<option value="Hentai">Hentai</option>
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