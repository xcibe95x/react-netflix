import { FC, useEffect, useRef, useState } from "react";
import styles from "./Dialog.module.css";
import { CastMember, Movie, Ratio } from "../../Interfaces";
import { fetchCast, fetchSimilarMovies, POSTER_API } from "../../api";
import { useMovieLogo } from "../../useMovieLogo";
import DialogCard from "../DialogCard/DialogCard";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";

/**
 * Convert number of minutes to a formattet string of type "xxHyyM" that represents the movie runtime.
 * @param {number} minutes number of minutes
 * @return {string} formatted string
 */
function formatRuntime(minutes: number): string {
  return "" + Math.floor(minutes / 60) + "h " + (minutes % 60) + "min";
}

const Dialog = (movie: Movie) => {
  const similarMoviesRef = useRef<HTMLDivElement>(null);
  const logo = useMovieLogo(movie.id);
  const [movieArr, setMovieArr] = useState<Movie[]>([]);
  const [castArr, setCastArr] = useState<CastMember[]>([]);

  useEffect(() => {
    fetchCast(movie.id).then((res) => setCastArr(res.slice(0, 5)));
    fetchSimilarMovies(movie.id).then((res) => setMovieArr(res));
  }, []);

  return (
    <div className={styles.opacityOverlay}>
      <div className={styles.dialog}>
        {/* <!-- DIALOG IMAGE + OVERLAY  --> */}
        <div className={styles.dialogImgShadow}>
          <LazyLoadImg
            style={styles.dialogImg}
            src={POSTER_API + movie.backdrop_path}
            ratio={Ratio.ratio_16x9}
            alt="img"
          />
          <div className={styles.dialogOverlay}>
            <img className={styles.dialogLogo} src={logo} alt={movie.title} />
            <div className={styles.dialogControls}>
              <button className={styles.dialogButton}>
                <i className="fas fa-play "></i>
                Play
              </button>
              <button className={`${styles.dialogButton} ${styles.buttonRoundDark}`}>
                <i className="far fa-plus"></i>
              </button>
              <button className={`${styles.dialogButton} ${styles.buttonRoundDark}`}>
                <i className="far fa-thumbs-up"></i>
              </button>
            </div>
          </div>
          <div className={styles.dialogCross}>
            <i className="far fa-xmark"></i>
          </div>
        </div>

        {/* <!-- DIALOG TEXT --> */}
        <div className={styles.dialogText}>
          <div className={styles.dialogTextLeft}>
            <span className={styles.compatibilityRate}>99% compatibile</span>
            <span className={styles.thin}>2013</span>
            <span className={styles.maturityNumber}>VM14</span>
            <span className={styles.thin}> {formatRuntime(movie.runtime)}</span>
            <span className={styles.qualityTag}>HD</span>
            <p className={styles.description}>{movie.overview}</p>
          </div>
          <div className={styles.dialogTextRight}>
            <p className={styles.rightSection}>
              <span className={styles.grey}>Cast: </span>
              {castArr.map((castMember, index) => (
                <a href="">
                  {castMember.name}
                  {index == castArr.length - 1 ? "" : ", "}
                </a>
              ))}
            </p>
            <p className={styles.rightSection}>
              <span className={styles.grey}>Genres: </span>
              {movie.genres.map((genere, index) => (
                <a href="">
                  {genere.name}
                  {index == movie.genres.length - 1 ? "" : ", "}
                </a>
              ))}
            </p>
          </div>
        </div>

        {/* <!-- SIMILAR MOVIES SECTION --> */}
        <h3 className={styles.dialogHeading}>Similar movies</h3>
        <div className={styles.dialogSimilarMovies} ref={similarMoviesRef}>
          {movieArr.map((movie, index) => (
            <DialogCard {...movie} key={index} />
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Dialog;
