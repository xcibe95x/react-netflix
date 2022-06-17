import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import { Movie, SliderSection } from "../../Interfaces";
import { MovieCard } from "../MovieCard/MovieCard";
import { TopTenCard } from "../TopTenCard/TopTenCard";
import styles from "./Slider.module.css";

export const Slider: React.FC<SliderSection> = (attribute) => {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies(attribute.pageIndex)
    .then(res => setMovies(res));
  }, [])

  const topFix = (index:number, movie:Movie) => {
    if(index < 10) {
      return (<TopTenCard movie={movie}  key={index} index={index+1} />) 
    }     
  } 


  return (
    <>
      <div className={styles.godSlider}>
        <h3 className={styles.sliderTitle}>
          {attribute.sectionTitle}
        </h3>
        <span className={styles.seeAllArrow}>
          <i className="fas fa-chevron-right"></i>
        </span>
        <span className={styles.seeAllText}>
          <i className="fas fa-chevron-right"></i>
        </span>
        <div className={styles.movieSection}>
          <div className={styles.posterContainer}>
        
            {movies.map((movie, i) => attribute.pageIndex != 6 ? <MovieCard movie={movie} showLogo={(attribute.pageIndex != 5)} key={i}/> : topFix(i,movie))}

          </div>
        </div>
      </div>
    </>
  );
};
