import { useContext, useEffect, useRef, useState } from "react";
import { fetchCast, fetchSimilarMovies, POSTER_API } from "../../api";
import { CastMember, Movie, MovieContext, Ratio } from "../../Interfaces";
import { formatRuntime, useMovieLogo } from "../../utils";
import DialogCard from "../DialogCard/DialogCard";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import styles from "./Dialog.module.css";

const Dialog = () => {
  const similarMoviesRef = useRef<HTMLDivElement>(null);
  const [movieArr, setMovieArr] = useState<Movie[]>([]);
  const [castArr, setCastArr] = useState<CastMember[]>([]);
  const { movie, showDialog, setShowDialog } = useContext(MovieContext);
  let logo = useMovieLogo(movie?.id);
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (movie) {
      fetchCast(movie.id).then((res) => setCastArr(res.slice(0, 5)));
      fetchSimilarMovies(movie.id).then((res) => setMovieArr(res));
    }
    if (showDialog) {
      ref.current!.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.addEventListener("click", closeDialog);
    } else {
      ref.current!.style.display = "none";
      document.body.style.overflow = "unset";
      document.body.removeEventListener("click", closeDialog);
    }
  }, [movie, showDialog]);

  function closeDialog(e: MouseEvent) {
    if (ref.current && !ref.current!.firstElementChild?.contains(e.target as Node)) setShowDialog(false);
  }

  return (
    <div className={styles.opacityOverlay} ref={ref}>
      <div className={styles.dialog}>
        {/* <!-- DIALOG IMAGE + OVERLAY  --> */}
        <div className={styles.dialogImgShadow}>
          <LazyLoadImg
            style={styles.dialogImg}
            src={movie ? POSTER_API + movie.backdrop_path : ""}
            ratio={Ratio.ratio_16x9}
            alt="img"
            viewportRelative={false}
          />
          <div className={styles.dialogOverlay}>
            <img className={styles.dialogLogo} src={logo} alt={movie?.title} />
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
          <div className={styles.dialogCross} onClick={() => setShowDialog(false)}>
            <i className="far fa-xmark"></i>
          </div>
        </div>

        {/* <!-- DIALOG TEXT --> */}
        <div className={styles.dialogText}>
          <div className={styles.dialogTextLeft}>
            <span className={styles.compatibilityRate}>99% compatibile</span>
            <span className={styles.thin}>2013</span>
            <span className={styles.maturityNumber}>VM14</span>
            <span className={styles.thin}> {movie ? formatRuntime(movie.runtime) : ""}</span>
            <span className={styles.qualityTag}>HD</span>
            <p className={styles.description}>{movie?.overview}</p>
          </div>
          <div className={styles.dialogTextRight}>
            <p className={styles.rightSection}>
              <span className={styles.bold}>Cast: </span>
              {castArr.map((castMember, index) => (
                <a href="" key={index}>
                  {castMember.name}
                  {index == castArr.length - 1 ? "" : ", "}
                </a>
              ))}
            </p>
            <p className={styles.rightSection}>
              <span className={styles.bold}>Genres: </span>
              {movie?.genres &&
                movie.genres.map((genere, index) => (
                  <a href="" key={index}>
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
