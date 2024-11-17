# Anime Finder

## Overview

A React-based anime search engine that allows users to search for anime by title or genre (WIP), and maintain a personalized watch list (WIP). The app is styled with Tailwind CSS and uses the Helmet package for managing meta tags. Routing is handled with BrowserRouter from react-router-dom.

## Features

- Filter content by genre (WIP)
- Search functionality to find anime
- Responsive design for desktop and mobile views
- Determine amount of posts displayed with a post dropdown
- Image hover transform
- Dark mode toggle
- Posts per page dropdown

## Prerequisites

Before you can run this project, install the following:

- Node.js
- npm (comes with Node.js)

## Installation Instructions

1. Clone the repository and cd into project directory
2. Install dependencies with npm install
3. Then in the terminal write npm run dev

## Usage Instructions

- Use the dropdown menu under to filter number of posts
- Use the search bar to find specific anime based off key words

## Branching Strategy

The project follows a feature-based branching strategy. Each feature is developed in a dedicated branch, making it easier to manage changes and track progress. The main branches used are:

- post-list-limit: Focused on implementing a limit for the list of posts displayed.
- fetch-genre: Added functionality to fetch and filter anime by genre.
- ui-tidy: Made overall UI adjustments and refinements.
  Merge requests are reviewed before being integrated into the main branch to ensure quality and stability.

## API Documentation

This project integrates the Anime DB API to fetch anime data. Below is a summary of how the API is used:

Endpoint: /anime
Endpoint: /genre
Base URL: https://anime-db.p.rapidapi.com
Methods Used: GET
Query Parameters:

- size: Number of anime items per page.
- search: Filters results based on keywords.
  Example Request:

fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=naruto`, {
headers: {
"X-RapidAPI-Key": "your-api-key",
"X-RapidAPI-Host": "anime-db.p.rapidapi.com"
}
})
For full API documentation, refer to the RapidAPI Playground.

## Troubleshooting

- If you encounter any issues with the project setup, ensure all prerequisites are installed and check that you have the latest versions of Node.js and npm.
- Ensure the VITE_ANIME_API_KEY is correctly set in your .env file.
  Example .env file:
  VITE_ANIME_API_KEY=your-rapidapi-key
  If the key is missing or incorrect, the app will fail to fetch data.
- If dependencies are missing or outdated, reinstall them:
  npm install
- If the API returns a CORS error, ensure:
  The API key is valid and not expired and the correct X-RapidAPI-Key and X-RapidAPI-Host headers are sent.
- If the app fails to fetch data:
  Check the network tab in developer tools for the API request status.
  Log details in the console to understand the error.
  Ensure the size and search query parameters are valid.
- If the app behaves unexpectedly, clear the cache:
  npm cache clean --force
- If troubleshooting fails, try a clean setup:
  rm -rf node_modules package-lock.json
  npm install
  npm start
