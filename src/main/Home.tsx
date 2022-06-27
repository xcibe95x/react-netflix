import { useContext, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Dialog from "../components/Dialog/Dialog";
import { Footer } from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { MediaPlayerModal } from "../components/MediaPlayerModal/MediaPlayerModal";
import { Slider } from "../components/Slider/Slider";
import { Movie, MovieContext, UserContext } from "../Interfaces";
import styles from "./Home.module.css";

function Home() {
  const { loggedUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPlayer, setShowPlayer] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [movie, setMovie] = useState<Movie | undefined>();
  const titles = [
    "Most popular on Godflex",
    `${loggedUser.name}${", " + "Keep Watching"}`,
    "Trending Now",
    "Coming Soon",
    "Top Rated",
    "Top Picks For You",
    `Title's You May Like`,
  ];
  const [slidersVisibile, setSlidersVisible] = useState<boolean[]>(titles.map(() => false));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setSlidersVisible(slidersVisibile.splice(i, 1, true));
        observer.unobserve(entry.target);
      }
    });
  });

  useEffect(() => {
    if (!loggedUser.name) navigate("/");
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movie: movie,
        setMovie: setMovie,
        showMediaPlayer: showPlayer,
        showDialog: showDialog,
        setShowMediaPlayer: setShowPlayer,
        setShowDialog: setShowDialog,
        coords: coords,
        setCoords: setCoords,
      }}
    >
      <MediaPlayerModal />
      <Dialog />
      <Hero />
      <div className={styles.wrapper}>
        {titles.map((title, i) => (
          <InView threshold={0.95} triggerOnce={true} key={i}>
            {({ inView, ref }) => <Slider ref={ref} isVisible={inView} sectionTitle={title} pageIndex={i + 1} />}
          </InView>
        ))}
      </div>
      <Footer />
    </MovieContext.Provider>
  );
}

export default Home;
