import useAnimeSearch from '../hooks/useAnimeSearch'
import AnimeCard from './AnimeCard';

const AnimeSearch = () => {
    const { animeData, searchTerm, setSearchTerm, loading } = useAnimeSearch();
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