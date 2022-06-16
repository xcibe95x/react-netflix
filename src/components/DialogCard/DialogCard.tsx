import styles from "./DialogCard.module.css";
import dialogStyles from "../Dialog/Dialog.module.css";
import { Movie } from "../../Interfaces";
import { useMovieLogo } from "../../useMovieLogo";

const DialogCard = (movie: Movie) => {
  const logo = useMovieLogo(movie.id);

  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} src="${posterAPI}${film.backdrop_path}" alt="backdrop img" />
        <img className={styles.cardLogo} src="${logo}" alt="" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardControls}>
          <span className={dialogStyles.maturityNumber}>VM14</span>
          <span className={dialogStyles.thin}>{movie.release_date.slice(0, 4)}</span>
          <button className={`${dialogStyles.dialogButton} ${dialogStyles.buttonRoundDark}`}>
            <i className="far fa-plus"></i>
          </button>
        </div>
        <p className={styles.grey}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default DialogCard;
