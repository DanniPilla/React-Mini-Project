const genresApiUrl = 'https://anime-db.p.rapidapi.com/genre';
const apiKey= import.meta.env.VITE_ANIME_API_KEY


export const fetchGenres = async () => {
  try {
    const response = await fetch(genresApiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      console.log("Genres Response Status:", response.status);
      console.log("Genres Response:", await response.text());
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Genre Data:", data);
    return data;
   
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};