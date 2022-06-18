import styles from "./TopTenCard.module.css";
import cardStyles from "../MovieCard/MovieCard.module.css";
import { Movie } from "../../Interfaces";
import { useEffect, useState } from "react";
import { fetchMovies, POSTER_API } from "../../api";
import { useMovieLogo } from "../../utils";

export const TopTenCard: React.FC<{ movie: Movie; index: number }> = ({ movie, index }) => {
  // const [topTen, setTopTen] = useState<Movie[]>([])

  // useEffect(()=>{
  //   fetchMovies(movie.movie.id).then((res)=> setTopTen(res))
  // },[])

  return (
    <div className={`${cardStyles.movieCard} ${styles.topTenCard}`}>
      <span className={styles.topTenNumber}>{index}</span>
      <img src={POSTER_API + movie.poster_path}></img>
    </div>
  );
  // {topTen.map((movie, index)=>)}
};
