import styles from "./Slider.module.css";

export const Slider = () => {
  return (
    <>
      <div className={styles.godSlider}>
        <h3 className={styles.sliderTitle}>
          <span id="god-name-cards">Zeus</span>, Keep watching:
        </h3>
        <span className={styles.seeAllArrow}>
          <i className="fas fa-chevron-right"></i>
        </span>
        <span className={styles.seeAllText}></span>
        <div className={styles.movieSection}>
          <div className={styles.posterContainer}></div>
        </div>
      </div>
    </>
  );
};
