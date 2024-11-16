const apiUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=';
const apiKey= import.meta.env.VITE_ANIME_API_KEY


export const fetchAnime = async (query) => {
    console.log("ApiKey",apiKey)
  try {
    const response = await fetch(`${apiUrl}${query}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
      },
    });
    
    if (!response.ok) {
         console.log("Response Status:", response.status);  // Log status code
      console.log("Response:", await response.text());  // Log raw response text
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json(); 
    console.log("Full Response Data:", data);
    return data;
   
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};