import styles from "./MovieCard.module.css";
import { Movie, Ratio } from "../../Interfaces";
import { POSTER_API } from "../../api";
import { useMovieLogo } from "../../useMovieLogo";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";

export const MovieCard: React.FC<{ movie: Movie; showLogo: boolean }> = ({ movie, showLogo }) => {
  const logoPath = useMovieLogo(movie.id);

  if (movie.backdrop_path)
    return (
      <div className={styles.movieCard}>
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
