const AnimeCard = ({anime}) =>{
 return (
     <a 
                    href={anime.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                className="block max-w-sm bg-white border rounded-lg p-4 shadow-md transition-transform transform hover:scale-105"
      style={{ display: "block" }}
                >
        <div className="w-full h-full">
            <img 
                src={anime.image} 
                alt={anime.title} 
                className="w-full h-48 object-cover rounded"
            />

            <div className="p-4 bg-pink-300 rounded-b-lg">
                <h2 className="text-xl  sm:text-2xl md:text-3xl  font-bold pb-5">{anime.title}</h2>
                <p className="text-sm sm:text-base md:text-lg" ><strong>Ranking: #</strong>{anime.ranking}</p>
                <p className="text-sm mb-2 sm:text-base md:text-lg"><strong>Episodes: </strong>{anime.episodes}</p>
                <p className="text-sm mb-2 sm:text-base md:text-lg"><strong>Status:</strong> {anime.status}</p>
                <p className="text-sm sm:text-base md:text-lg">

                    <strong>Genres: </strong> 
                    {anime.genres && anime.genres.length>0? anime.genres.join(', '): "Unknown"}
                </p>
                <p className=" mt-2 line-clamp-3 text-sm  sm:text-base md:text-lg">
                    {anime.synopsis || "No available synopsis"}
                </p>
              
               
            </div>
        </div>
         </a>
    );
};

export default AnimeCard;