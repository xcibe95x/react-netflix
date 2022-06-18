import { MediaPlayerModal } from "../components/MediaPlayerModal/MediaPlayerModal";
import { Slider } from "../components/Slider/Slider";
import { useContext, useEffect, useState } from "react";
import { Movie, MovieContext, UserContext } from "../Interfaces";
import Hero from "../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import styles from "./Home.module.css";
import Dialog from "../components/Dialog/Dialog";

function Home() {
  const { loggedUser, setUser } = useContext(UserContext);
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
          <Slider attribute={{ sectionTitle: title, pageIndex: i + 1 }} key={i} />
        ))}
      </div>
      <Footer />
    </MovieContext.Provider>
  );
}

export default Home;
