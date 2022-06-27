import { MouseEvent, useContext, useRef } from "react";
import { fetchMovieData, POSTER_API } from "../../api";
import { Movie, MovieContext, Ratio } from "../../Interfaces";
import { cumulativeOffset, useMovieLogo } from "../../utils";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import styles from "./MovieCard.module.css";

export const MovieCard: React.FC<{
  movie: Movie;
  showLogo: boolean;
}> = ({ movie, showLogo }) => {
  const logoPath = useMovieLogo(movie.id);
  const { setMovie, setShowMediaPlayer, setShowDialog, setCoords } = useContext(MovieContext);
  const ref = useRef<HTMLDivElement>(null);
  let timer: NodeJS.Timeout | null = null;

  function handleMouseEnter(e: MouseEvent) {
    if (window.innerWidth > 480) {
      let rect = ref.current!.getBoundingClientRect();
      timer = setTimeout(() => {
        fetchMovieData(movie.id).then((res) => setMovie(res));
        setCoords({ top: cumulativeOffset(ref.current!), left: rect.left });
        setShowMediaPlayer(true);
      }, 750);
    }
  }

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    if (window.innerWidth <= 480) {
      fetchMovieData(movie.id).then((res) => setMovie(res));
      setShowDialog(true);
    }
  }

  function preventSpawn() {
    if (timer) clearTimeout(timer!);
  }

  if (movie.backdrop_path)
    return (
      <div
        ref={ref}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={preventSpawn}
        className={styles.movieCard}
      >
        {movie.vote_average > 7.8 && <span className={styles.topTen}></span>}
        {showLogo && <img src={logoPath} className={styles.movieLogo}></img>}
        <LazyLoadImg
          ratio={showLogo ? Ratio.ratio_16x9 : Ratio.ratio_2x3}
          alt={movie.title}
          src={POSTER_API + (showLogo ? movie.backdrop_path : movie.poster_path)}
          style=""
          viewportRelative={true}
        />
      </div>
    );
  else return <></>;
};
