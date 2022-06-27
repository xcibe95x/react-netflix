import { POSTER_API } from "../../api";
import { Movie, Ratio } from "../../Interfaces";
import { useMovieLogo } from "../../utils";
import dialogStyles from "../Dialog/Dialog.module.css";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";
import styles from "./DialogCard.module.css";

const DialogCard = (movie: Movie) => {
  const logo = useMovieLogo(movie.id);

  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <LazyLoadImg
          style={styles.cardImg}
          src={POSTER_API + movie.backdrop_path}
          alt={movie.title}
          ratio={Ratio.ratio_16x9}
          viewportRelative={false}
        />

        <img className={styles.cardLogo} src={logo} alt={movie.title} />
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
