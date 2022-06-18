import styles from "./MovieCard.module.css";
import { Movie, MovieContext, Ratio } from "../../Interfaces";
import { POSTER_API } from "../../api";
import { useMovieLogo } from "../../utils";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import { MouseEvent, useContext, useRef } from "react";

/**
 * Calculate and returns the cumulative `offsetTop` of the provided `element` from the top of the document.
 * @param {HTMLElement} element
 * @returns Total `offsteTop` of the element from the top of the document.
 */
function cumulativeOffset(element: Element | null): number {
  let top = 0;
  do {
    top += (element! as HTMLElement).offsetTop || 0;
    element = (element! as HTMLElement).offsetParent;
  } while (element);

  return top;
}

export const MovieCard: React.FC<{
  movie: Movie;
  showLogo: boolean;
}> = ({ movie, showLogo }) => {
  const logoPath = useMovieLogo(movie.id);
  const { setMovie, setShowMediaPlayer, setShowDialog, setCoords } = useContext(MovieContext);
  const ref = useRef<HTMLDivElement>(null);
  let timer: NodeJS.Timeout | null = null;

  function handleMouseEnter(e: MouseEvent) {
    let rect = ref.current!.getBoundingClientRect();
    timer = setTimeout(() => {
      setMovie(movie);
      setCoords({ top: cumulativeOffset(ref.current!), left: rect.left });
      setShowMediaPlayer(true);
    }, 750);
  }

  function preventSpawn() {
    clearTimeout(timer!);
  }

  if (movie.backdrop_path)
    return (
      <div ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={preventSpawn} className={styles.movieCard}>
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
