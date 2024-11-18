import { useState, useEffect } from "react";
import { fetchAnime } from "./fetchAnime";

const useAnimeSearch = (size = 10, genres = "") => {
  const [animeData, setAnimeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    const getAnime = async () => {
      setLoading(true);
      try {
        const query = debouncedSearchTerm || "";
        const data = await fetchAnime(query, size, genres);
        setAnimeData(data.data || []);
      } catch (error) {
        console.log("Error fetching request", error);
      }
      setLoading(false);
    };

   
      getAnime();
  
  }, [debouncedSearchTerm, size, genres]);

  return { animeData, searchTerm, setSearchTerm, loading,};
};

export default useAnimeSearch;