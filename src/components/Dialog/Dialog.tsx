import styles from "./Dialog.module.css";

const Dialog = () => {
  return (
    <div className="opacity-overlay">
      <div className="dialog">
        {/* <!-- DIALOG IMAGE + OVERLAY  --> */}
        <div className={styles.dialogImgShadow}>
          <img className={styles.dialogImg} src="./assets/img/posters/MoviePoster.png" alt="img" />
          <div className={styles.dialogOverlay}>
            <img className={styles.dialogLogo} src="./assets/img/posters/MovieName.png" alt="Movie logo" />
            <div className="dialog__controls">
              <button className={styles.dialogButton}>
                <img src="./assets/img/VectorPlay.png" alt="play icon" /> Play
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
            <span className="thin">2013</span>
            <span className="maturity-number">VM14</span>
            <span className="thin"> 5 seasons</span>
            <span className="quality-tag">HD</span>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eum voluptates dolores ex dolorum accusamus
              obcaecati provident sunt aliquid voluptate!
            </p>
          </div>
          <div className="dialog__text-right">
            <p className="right-section"></p>
            <p className="right-section"></p>
          </div>
        </div>

        {/* <!-- SIMILAR MOVIES SECTION --> */}
        <h3 className="dialog__heading">Similar movies</h3>
        <div className="dialog__similar-movies" id="similar-movies"></div>
      </div>
    </div>
  );
};

export default Dialog;
