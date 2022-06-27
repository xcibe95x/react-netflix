import { CSSProperties, forwardRef, MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { fetchMovies } from "../../api";
import { Movie, SliderSection } from "../../Interfaces";
import { MovieCard } from "../MovieCard/MovieCard";
import { TopTenCard } from "../TopTenCard/TopTenCard";
import styles from "./Slider.module.css";

export const Slider = forwardRef<HTMLDivElement, SliderSection>((attribute, ref) => {
  const posterContainerRef = useRef<HTMLDivElement>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const buttonLeftStyle = useMemo(computeButtonLeftStyle, [scrollPosition]);
  const buttonRightStyle = useMemo(computeButtonRightStyle, [scrollPosition]);

  function computeButtonLeftStyle(): CSSProperties | undefined {
    return scrollPosition == 0 ? { display: "none" } : undefined;
  }

  function computeButtonRightStyle(): CSSProperties | undefined {
    if (posterContainerRef.current)
      return posterContainerRef.current!.scrollLeft + posterContainerRef.current!.offsetWidth ===
        posterContainerRef.current!.scrollWidth
        ? { display: "none" }
        : undefined;
    return undefined;
  }

  useEffect(() => {
    if (attribute.isVisible) fetchMovies(attribute.pageIndex).then((res) => setMovies(res));
  }, [attribute.isVisible]);

  /**
   *  Scroll on click function. Automatically gets the scroll amount based on current MovieCard size.
   * @param e Click Event on on of the Slider arrows
   * @param direction true to scroll right, false otherwise
   */
  const clickScroll = (e: MouseEvent, direction: boolean) => {
    let scrollWidth = posterContainerRef.current!.firstElementChild!.clientWidth;
    posterContainerRef.current!.scrollLeft += direction ? scrollWidth : -scrollWidth;
    setScrollPosition(posterContainerRef.current!.scrollLeft);
  };

  const topFix = (index: number, movie: Movie) => {
    if (index < 10) {
      return <TopTenCard movie={movie} key={index} index={index + 1} />;
    }
  };

  return (
    <div ref={ref} className={styles.godSlider}>
      <h3 className={styles.sliderTitle}>{attribute.sectionTitle}</h3>
      <span className={styles.seeAllArrow}>
        <i className="fas fa-chevron-right"></i>
      </span>
      <span className={styles.seeAllText}>
        <i className="fas fa-chevron-right"></i>
      </span>
      <div className={styles.movieSection}>
        <button
          style={buttonRightStyle}
          className={`${styles.buttonDx} ${styles.sliderButton}`}
          onClick={(e) => clickScroll(e, true)}
        >
          <i className="far fa-chevron-right fa-2xl"></i>
        </button>
        <button
          style={buttonLeftStyle}
          className={`${styles.buttonSx} ${styles.sliderButton}`}
          onClick={(e) => clickScroll(e, false)}
        >
          <i className="far fa-chevron-left fa-2xl"></i>
        </button>
        <div
          className={styles.posterContainer}
          ref={posterContainerRef}
          onScroll={(e) => setScrollPosition((e.target as HTMLElement).scrollLeft)}
        >
          {movies.map((movie, i) =>
            attribute.pageIndex != 6 ? (
              <MovieCard movie={movie} showLogo={attribute.pageIndex != 5} key={i} />
            ) : (
              topFix(i, movie)
            )
          )}
        </div>
      </div>
    </div>
  );
});
