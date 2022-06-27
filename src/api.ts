import { CastMember, Movie } from "./Interfaces";

const BASE_URL = "https://api.themoviedb.org";
export const POSTER_API = "https://image.tmdb.org/t/p/original";

/**
 * Fetches logo for movie with id {@linkcode movieId} if exists
 * @param {number } movieId
 * @returns A `Promise<string>` with the logo path if it exists, empty string otherwise.
 */
export async function fetchMovieLogo(movieId: number): Promise<string> {
  let response = await fetch(
    BASE_URL + "/3/movie/" + movieId + "/images?api_key=" + process.env.REACT_APP_API_KEY + "&include_image_language=en"
  );
  let imgData = await response.json();
  let path = "";
  if (imgData.logos !== undefined && imgData.logos.length > 0) path = POSTER_API + imgData.logos[0].file_path;
  return path;
}

/**
 * Fetches data for the movie with id {@linkcode movieId} then returns it as a `Promise`
 * @param {number } movieId Id of the movie of which data must be fetched
 * @returns Movie data as a `Promise`
 */
export async function fetchMovieData(movieId: number): Promise<Movie> {
  let result = await fetch(BASE_URL + "/3/movie/" + movieId + "?api_key=" + process.env.REACT_APP_API_KEY);
  return result.json();
}

/**
 * Fetches similar movies data relative to movie with id {@linkcode movieId}
 * @param {number } movieId
 * @returns Similar movies data as a `Promise`
 */
export async function fetchSimilarMovies(movieId: number): Promise<Movie[]> {
  let response = await fetch(BASE_URL + "/3/movie/" + movieId + "/similar?api_key=" + process.env.REACT_APP_API_KEY);
  let json = await response.json();
  return json.results;
}

/**
 * Fetches cast data relative to movie with id {@linkccode movieId}
 * @param {number } movieId id to fetch cast for
 * @returns object describing cast members
 */
export async function fetchCast(movieId: number): Promise<CastMember[]> {
  let response = await fetch(BASE_URL + "/3/movie/" + movieId + "/credits?api_key=" + process.env.REACT_APP_API_KEY);
  let json = await response.json();
  return json.cast;
}

export async function fetchMovies(pageIndex: number): Promise<Movie[]> {
  let response = await fetch(
    BASE_URL + "/3/movie/popular?api_key=" + process.env.REACT_APP_API_KEY + "&page=" + pageIndex
  );
  let json = await response.json();
  return json.results;
}
