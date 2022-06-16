import styles from "./Hero.module.css";
import top10badge from "../../assets/images/Top10Badge.png";
import video from "../../assets/videos/strangerThings.mp4";

const Hero = () => {
  return (
    <div className={styles.moviePoster}>
      {/* <!-- Hero Video and Picture Inline Media Queries --> */}

      {/* <!-- Video Player --> */}

      <video className={styles.backgroundVideo} autoPlay muted loop poster="../../assets/MovieName.png">
        <source src={video} type="video/mp4" />
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
        <div className={styles.movieposter__riproduci}>
          <a href="#" className={styles.btnRiproduci}>
            <div className={styles.play}>
              <i className="fas fa-play"></i>
            </div>
            Play
          </a>
          <a href="#" className={`${styles.btnRiproduci} ${styles.btnInfo}`}>
            <div className={styles.info}>
              <i className="far fa-cicrcle-info"></i>
            </div>
            More info
          </a>
        </div>
      </div>

      {/* <!-- Popular Section -->
        <div class="popular-container">
          <h3 class="section-title">Popular on Godflex</h3>
          <span class="see-all-notext"></span>
          <span class="see-all"></span>
          <div class="movie-section">
            <div class="poster-container"></div>
          </div>
        </div>*/}
    </div>
  );
};

export default Hero;
