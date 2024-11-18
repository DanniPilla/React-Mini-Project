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
  },
   {
    id: 11,
    title: "Hunter x Hunter",
    image: "https://m.media-amazon.com/images/I/81FyZ58ZseL._SY679_.jpg",
    ranking: 11,
    episodes: 148,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "A boy embarks on a journey to find his father, a legendary Hunter, and become a Hunter himself.",
    link: "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
  },
  {
    id: 12,
    title: "Cowboy Bebop",
    image: "https://m.media-amazon.com/images/I/81a8g92a7JL._SY679_.jpg",
    ranking: 12,
    episodes: 26,
    status: "Finished",
    genres: ["Action", "Sci-Fi", "Space Western"],
    synopsis: "A group of bounty hunters chase criminals across the galaxy in their spaceship, Bebop.",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
  },
  {
    id: 13,
    title: "Fruits Basket (2019)",
    image: "https://m.media-amazon.com/images/I/71z4lNcih9L._SY679_.jpg",
    ranking: 13,
    episodes: 63,
    status: "Finished",
    genres: ["Romance", "Drama", "Slice of Life"],
    synopsis: "Tohru Honda becomes involved with the mysterious Sohma family, who are cursed to transform into animals of the Chinese zodiac.",
    link: "https://myanimelist.net/anime/39692/Fruits_Basket_2019",
  },
  {
    id: 14,
    title: "Your Name",
    image: "https://m.media-amazon.com/images/I/51fj9ykq+qL._SY679_.jpg",
    ranking: 14,
    episodes: 1,
    status: "Finished",
    genres: ["Romance", "Drama", "Fantasy"],
    synopsis: "Two teenagers experience body-swapping and develop a unique connection despite time and space barriers.",
    link: "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
  },
  {
    id: 15,
    title: "Re:Zero",
    image: "https://m.media-amazon.com/images/I/81pK8OsV3KL._SY679_.jpg",
    ranking: 15,
    episodes: 25,
    status: "Ongoing",
    genres: ["Drama", "Fantasy", "Isekai"],
    synopsis: "A boy is transported to a fantasy world where he discovers he can reset time each time he dies.",
    link: "https://myanimelist.net/anime/31219/Re_Zero_kara_Hajimeru_Isekai_Seikatsu",
  },
  {
    id: 16,
    title: "Steins;Gate",
    image: "https://m.media-amazon.com/images/I/81q3bMZVn9L._SY679_.jpg",
    ranking: 16,
    episodes: 24,
    status: "Finished",
    genres: ["Sci-Fi", "Thriller", "Psychological"],
    synopsis: "A mad scientist and his friends discover the ability to send messages to the past, setting off dangerous events.",
    link: "https://myanimelist.net/anime/9253/Steins_Gate",
  },
  {
    id: 17,
    title: "One Punch Man",
    image: "https://m.media-amazon.com/images/I/71Q7qO-xobL._SY679_.jpg",
    ranking: 17,
    episodes: 24,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Superhero"],
    synopsis: "A hero who can defeat any opponent with a single punch seeks a worthy opponent to give his life meaning.",
    link: "https://myanimelist.net/anime/30276/One_Punch_Man",
  },
  {
    id: 18,
    title: "Mob Psycho 100",
    image: "https://m.media-amazon.com/images/I/71sq33D2bSL._SY679_.jpg",
    ranking: 18,
    episodes: 25,
    status: "Finished",
    genres: ["Action", "Comedy", "Supernatural"],
    synopsis: "A young psychic tries to live a normal life while dealing with his overwhelming powers and the pressures that come with them.",
    link: "https://myanimelist.net/anime/35038/Mob_Psycho_100",
  },
];


const useAnimeSearch = (size = 10, genres = "") => {
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
      if (!debouncedSearchTerm && !genres && size === 10) {
        setAnimeData(stagnantAnimeData);
        return;
      }
      setLoading(true);
      try {
        const query = debouncedSearchTerm || "";
        const data = await fetchAnime(query, size, genres);
        setAnimeData(data.data || []);
      } catch (error) {
        console.log("Error fetching request", error);
        setAnimeData(stagnantAnimeData)
      }
      setLoading(false);
    };

   
      getAnime();
  
  }, [debouncedSearchTerm, size, genres]);

  return { animeData, searchTerm, setSearchTerm, loading,};
};

export default useAnimeSearch;