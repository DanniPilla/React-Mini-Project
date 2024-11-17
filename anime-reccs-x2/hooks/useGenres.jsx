import { useState, useEffect } from "react";
import { fetchGenres } from "./fetchGenres";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true);
      try {
        const data = await fetchGenres();
        setGenres(data || []);
      } catch (error) {
        console.log("Error fetching genres", error);
      }
      setLoading(false);
    };

    getGenres();
  }, []);

  return { genres, loading, setGenres };
};

export default useGenres;