import { FC, useRef } from "react";
import styles from "./Dialog.module.css";
import { Movie } from "../../Interfaces";
import { POSTER_API } from "../../api";
import { useMovieLogo } from "../../useMovieLogo";

const Dialog = (movie: Movie) => {
  const similarMoviesRef = useRef<HTMLDivElement>(null);
  const logo = useMovieLogo(movie.id);

  /**
   * Convert number of minutes to a formattet string of type "xxHyyM" that represents the movie runtime.
   * @param {number} minutes number of minutes
   * @return {string} formatted string
   */
  function formatRuntime(minutes: number): string {
    return "" + Math.floor(minutes / 60) + "h " + (minutes % 60) + "min";
  }

  return (
    <div className={styles.opacityOverlay}>
      <div className={styles.dialog}>
        {/* <!-- DIALOG IMAGE + OVERLAY  --> */}
        <div className={styles.dialogImgShadow}>
          <img className={styles.dialogImg} src={POSTER_API + movie.backdrop_path} alt="img" />
          <div className={styles.dialogOverlay}>
            <img className={styles.dialogLogo} src={logo} alt="Movie logo" />
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
            <p className={styles.rightSection}></p>
            <p className={styles.rightSection}></p>
          </div>
        </div>

        {/* <!-- SIMILAR MOVIES SECTION --> */}
        <h3 className={styles.dialogHeading}>Similar movies</h3>
        <div className={styles.dialogSimilarMovies} ref={similarMoviesRef}>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
