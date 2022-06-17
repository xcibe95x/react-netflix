import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import { Movie, SliderSection } from "../../Interfaces";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./Slider.module.css";

export const Slider: React.FC<SliderSection> = (attribute) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies(attribute.pageIndex).then((res) => setMovies(res));
  }, []);

  return (
    <>
      <div className={styles.godSlider}>
        <h3 className={styles.sliderTitle}>{attribute.sectionTitle}</h3>
        <span className={styles.seeAllArrow}>
          <i className="fas fa-chevron-right"></i>
        </span>
        <span className={styles.seeAllText}>
          <i className="fas fa-chevron-right"></i>
        </span>
        <div className={styles.movieSection}>
          <div className={styles.posterContainer}>
            {movies.map((movie, i) => (
              <MovieCard movie={movie} showLogo={attribute.pageIndex != 5} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
