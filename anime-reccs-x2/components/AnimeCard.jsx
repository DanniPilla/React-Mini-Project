const AnimeCard = ({anime}) =>{
 return (
        <div className="anime-card border rounded-lg p-4 shadow-md">
            <img 
                src={anime.image} 
                alt={anime.title} 
                className="w-full h-48 object-cover rounded"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold">{anime.title}</h2>
                <p className="text-sm text-gray-500">Ranking: #{anime.ranking}</p>
                <p className="text-sm text-gray-500 mb-2">Episodes: {anime.episodes}</p>
                <p className="text-sm text-gray-500 mb-2">Status: {anime.status}</p>
                <p className="text-sm">
                    <strong>Genres: </strong> 
                    {anime.genres && anime.genres.length>0? anime.genres.join(', '): "Unknown"}
                </p>
                <p className="text-gray-700 mt-2 line-clamp-3">
                    {anime.synopsis}
                </p>
                <a 
                    href={anime.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 underline mt-2 inline-block"
                >
                    More Details
                </a>
            </div>
        </div>
    );
};

export default AnimeCard;