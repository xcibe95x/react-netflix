import styles from "./Hero.module.css";
import top10badge from "../../assets/images/Top10Badge.png";
import video from "../../assets/videos/strangerThings.mp4";

const Hero = () => {
  return (
    <div className={styles.moviePoster}>
      {/* <!-- Hero Video and Picture Inline Media Queries --> */}

      {/* <!-- Video Player --> */}

      <video className={styles.backgroundVideo} autoPlay muted loop poster="../../assets/hero/MovieName.png">
        <source src="https://xcibe95x.github.io/js-netflix/assets/hero/strangerThings.mp4" type="video/mp4" />
      </video>

      {/* <!-- Film Rating And Infos --> */}
      <span className={styles.rating}>VM14</span>
      <div className={styles.movieInfo}>
        <div className={styles.movieposterLogo}></div>
        <div className={styles.movieposterSupplementalMessage}>
          <img src={top10badge} alt="Top10Badge" />
          <p>Today n° 1 TV series</p>
        </div>
        <div className={styles.movieposterDescription}>
          <p>
            When a little boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
            supernatural forces, and one strange little girl.
          </p>
        </div>
        <div className={styles.movieposterRiproduci}>
          <a href="#" className={styles.btnRiproduci}>
            <div className={styles.play}>
              <i className="fas fa-play"></i>
            </div>
            Play
          </a>
          <a href="#" className={`${styles.btnRiproduci} ${styles.btnInfo}`}>
            <div className={styles.info}>
              <i className="far fa-circle-info"></i>
            </div>
            More info
          </a>
        </div>
      </div>    
    </div>
  );
};

export default Hero;
