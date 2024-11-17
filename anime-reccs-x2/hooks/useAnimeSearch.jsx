import { useState, useEffect } from "react";
import { fetchAnime } from "./fetchAnime";

const useAnimeSearch = (size = 10, ) => {
  const [animeData, setAnimeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    const getAnime = async () => {
      setLoading(true);
      try {
        const query = `${debouncedSearchTerm}&size=${size}${genre ? `&genres=${genre}` : ""}`;
        const data = await fetchAnime(query);
        setAnimeData(data.data || []);
      } catch (error) {
        console.log("Error fetching request", error);
      }
      setLoading(false);
    };

    if (debouncedSearchTerm) {
      getAnime();
    } else {
      setAnimeData([]);
    }
  }, [debouncedSearchTerm, size, genre]);

  return { animeData, searchTerm, setSearchTerm, loading, genre, setGenre };
};

export default useAnimeSearch;