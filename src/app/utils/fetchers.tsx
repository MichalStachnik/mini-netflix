import { BASE_API_URL, FIVE_MINUTES } from './constants';

export const fetchMovies = async (query: string) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/?s=${query}&apikey=${process.env.API_KEY}`,
      {
        next: {
          revalidate: FIVE_MINUTES,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies', error);
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/?i=${id}&apikey=${process.env.API_KEY}`,
      {
        next: {
          revalidate: FIVE_MINUTES,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie', error);
  }
};
