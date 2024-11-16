import {useState, useEffect} from "react"
import {fetchAnime} from "./fetchAnime"

const useAnimeSearch = () =>{
    const [animeData, setAnimeData] = useState([]);
    const [searchTerm, setSearchTerm]=useState("");
    const [loading, setLoading]= useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    useEffect(()=>{
        const timerId = setTimeout(() => setDebouncedSearchTerm(searchTerm),500)
    return ()=>clearTimeout(timerId)
    }, [searchTerm])
 
    useEffect(()=>{
        const getAnime = async () => {
            if(debouncedSearchTerm){
                setLoading(true);
                try{
                    const data = await fetchAnime(debouncedSearchTerm);
                    setAnimeData(data.data || []);
                } catch (error){
                    console.log("Error fetching request", error)
                }
                setLoading(false);
            } else {
                setAnimeData([]);
            }
        }
        getAnime();
    },[debouncedSearchTerm]);

    return {animeData, searchTerm, setSearchTerm, loading};
}

export default useAnimeSearch 