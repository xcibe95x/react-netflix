import { useContext, useEffect, useState } from "react";
import { fetchMovieLogo } from "./api";
import { MovieContext, UserContext } from "./Interfaces";

export function useMovieLogo(movieId: number | undefined) {
  const [path, setPath] = useState("");
  const { movie } = useContext(MovieContext);

  useEffect(() => {
    if (movieId)
      fetchMovieLogo(movieId).then((path) => {
        setPath(path);
      });
  }, [movie]);

  return path;
}

/**
 * Convert number of minutes to a formattet string of type "xxHyyM" that represents the movie runtime.
 * @param {number} minutes number of minutes
 * @return {string} formatted string
 */
export function formatRuntime(minutes: number): string {
  return "" + Math.floor(minutes / 60) + "h " + (minutes % 60) + "min";
}
