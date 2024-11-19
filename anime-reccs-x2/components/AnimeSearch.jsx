import  { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useAnimeSearch from "../hooks/useAnimeSearch";
import AnimeCard from "./AnimeCard";
import { MyThemeContext } from "../context/MyThemeContext";
import {Search} from 'lucide-react'

const AnimeSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { background, foreground } = useContext(MyThemeContext);

  const size = searchParams.get("size") || 10;
  const [genre, setGenre] = useState("");
  const { animeData, searchTerm, setSearchTerm, loading } = useAnimeSearch(size, genre);

  const handleChangeSize = (e) => {
    setSearchParams({ size: e.target.value });
  };

  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div
      className="anime-search-container p-4"
      style={{
        backgroundColor: background,
        color: foreground,
      }}
    >
      {/* Search and Filters */}
      <div className="flex justify-center space-x-4 mb-6">
    <div className="relative max-w-md">
  <Search className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-500" />
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for an Anime"
    className="w-full pl-10 p-2 border border-gray-300 rounded mb-4 text-black"
  />
</div>
        <select
          value={size}
          onChange={handleChangeSize}
          className="p-2 border border-gray-300 rounded mb-4 ml-2 text-black"
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
          <option value="">Genres</option>
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
      </div>

      {/* Anime Cards */}
      {loading && <p>Loading...</p>}
      {!loading && animeData.length === 0 && (
        <p>Sorry, there isn't an anime that matches your search.</p>
      )}
      {!loading && animeData.length > 0 && (
        <div className="mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {animeData.map((anime) => (
            <AnimeCard key={anime._id || anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
