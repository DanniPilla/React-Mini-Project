import { useState, useEffect } from "react";
import { fetchAnime } from "./fetchAnime";

const stagnantAnimeData = [
  {
    id: 1,
    title: "Naruto",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg",
    ranking: 1,
    episodes: 500,
    status: "Finished",
    genres: ["Action", "Adventure", "Ninja"],
    synopsis: "A young ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
    link: "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
  },
  {
    id: 2,
    title: "One Piece",
    image: "https://sm.ign.com/t/ign_in/photo/default/one-piece-anime-1695772780177_eegk.1280.jpg",
    ranking: 2,
    episodes: 1000,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Pirates"],
    synopsis: "Monkey D. Luffy and his pirate crew explore the Grand Line in search of the world's ultimate treasure.",
    link: "https://myanimelist.net/anime/21/One_Piece",
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "https://m.media-amazon.com/images/M/MV5BYWI3ODE3OTYtMWMzMS00OWY0LThkYWYtYTdjMmY0YjFlODAzXkEyXkFqcGc@._V1_QL75_UY281_CR31,0,500,281_.jpg",
    ranking: 3,
    episodes: 75,
    status: "Ongoing",
    genres: ["Action", "Drama", "Fantasy", "Shounen"],
    synopsis: "Humanity's last stand against the giant, man-eating Titans who threaten their existence.",
    link: "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
  },
  {
    id: 4,
    title: "Fullmetal Alchemist: Brotherhood",
    image: "https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    ranking: 4,
    episodes: 64,
    status: "Finished",
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    link: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
  },
  {
    id: 5,
    title: "Demon Slayer",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2115/yvl4t3kO54WQ2cn1E5X0Mh2U.png",
    ranking: 5,
    episodes: 26,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Supernatural"],
    synopsis: "A young boy becomes a demon slayer after his family is slaughtered by demons.",
    link: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba",
  },
  {
    id: 6,
    title: "My Hero Academia",
    image: "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    ranking: 6,
    episodes: 100,
    status: "Ongoing",
    genres: ["Action", "Superhero", "Shounen"],
    synopsis: "In a world where most people have superpowers, a powerless boy aspires to become a hero.",
    link: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia",
  },
  {
    id: 7,
    title: "Death Note",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXc9H8lmPcbCxGF8nJmzIE6cQVVj6SQSGBA&s",
    ranking: 7,
    episodes: 37,
    status: "Finished",
    genres: ["Mystery", "Psychological", "Thriller"],
    synopsis: "A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.",
    link: "https://myanimelist.net/anime/1535/Death_Note",
  },
  {
    id: 8,
    title: "Tokyo Ghoul",
    image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6c496691df13a15aaf9be63caa7fc429.jpg",
    ranking: 8,
    episodes: 12,
    status: "Finished",
    genres: ["Action", "Horror", "Supernatural"],
    synopsis: "A college student is transformed into a half-ghoul after a near-fatal encounter with one of these creatures.",
    link: "https://myanimelist.net/anime/36511/Tokyo_Ghoul_re",
  },
  {
    id: 9,
    title: "Sword Art Online",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvawl4WebOpHKJ26mhrFH6PJjYwRoRt3ySw&s",
    ranking: 9,
    episodes: 75,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy", "Isekai"],
    synopsis: "Players trapped in a virtual reality MMORPG must fight their way to freedom.",
    link: "https://myanimelist.net/anime/11757/Sword_Art_Online",
  },
  {
    id: 10,
    title: "Neon Genesis Evangelion",
    image: "https://i.pinimg.com/736x/5b/2a/61/5b2a61af12ad57cc7ea59b16f8204dd5.jpg",
    ranking: 10,
    episodes: 26,
    status: "Finished",
    genres: ["Mecha", "Psychological", "Sci-Fi"],
    synopsis: "Teenagers pilot giant bio-mechanical robots to fight against mysterious beings known as Angels.",
    link: "https://myanimelist.net/anime/30/Shinseiki_Evangelion",
  }
];

const useAnimeSearch = (size = 10) => {
  const [animeData, setAnimeData] = useState(stagnantAnimeData);
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
        const query = `${debouncedSearchTerm}&size=${size}`;
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
      setAnimeData(stagnantAnimeData);
    }
  }, [debouncedSearchTerm, size]);

  return { animeData, searchTerm, setSearchTerm, loading };
};

export default useAnimeSearch;