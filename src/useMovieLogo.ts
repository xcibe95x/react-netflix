import { useEffect, useState } from "react";
import { fetchMovieLogo } from "./api";

export function useMovieLogo(movieId: number) {
  const [path, setPath] = useState("");

  useEffect(() => {
    fetchMovieLogo(movieId).then((path) => {
      setPath(path);
    });
  }, []);

  return path;
}
