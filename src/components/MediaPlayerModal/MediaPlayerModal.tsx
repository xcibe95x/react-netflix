import { useContext, useEffect, useRef } from "react";
import { POSTER_API } from "../../api";
import { MovieContext } from "../../Interfaces";
import { formatRuntime } from "../../utils";
import styles from "./MediaPlayerModal.module.css";

export const MediaPlayerModal = () => {
  const { movie, setMovie, showMediaPlayer, coords, setShowMediaPlayer, setShowDialog } = useContext(MovieContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showMediaPlayer) {
      ref.current!.style.top = coords.top + "px";
      ref.current!.style.left = coords.left + "px";
      ref.current!.classList.add(styles.show);
      return;
    }
    ref.current!.classList.remove(styles.show);
  }, [showMediaPlayer, coords]);

  return (
    <div className={styles.mediaPlayer} ref={ref} onMouseLeave={() => setShowMediaPlayer(false)}>
      <img className={styles.mPlayerImage} src={movie ? POSTER_API + movie.backdrop_path : ""} />
      <div className={styles.mPlayerContainer}>
        <span className={styles.cardPlay}></span>
        <span className={styles.cardAdd}></span>
        <span className={styles.cardLike}></span>
        <span
          className={styles.cardMore}
          onClick={(e) => {
            e.stopPropagation();
            setShowDialog(true);
          }}
        >
          <i className="fa-regular fa-chevron-down"></i>
        </span>
      </div>
      <div className={styles.mPlayerContainer}>
        <span className={styles.compatible}>
          98% compatible<span className={styles.vm14}>VM14</span>
          <span style={{ color: "var(--smokeWhite)" }}>{movie && formatRuntime(movie.runtime)}</span>
        </span>
      </div>
      <div className={`${styles.genre} ${styles.compatible}`}>
        {movie?.genres && movie.genres.map((el, i) => <span key={i}>{el.name}</span>)}
      </div>
    </div>
  );
};
