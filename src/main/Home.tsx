import { MediaPlayerModal } from "../components/MediaPlayerModal/MediaPlayerModal";
import { Slider } from "../components/Slider/Slider";
import { useContext, useEffect } from "react";
import { Movie, UserContext } from "../Interfaces";
import Hero from "../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { METHODS } from "http";
import { Footer } from "../components/Footer/Footer";
import styles from './Home.module.css';

const mockMovie: Movie = {
  backdrop_path: "/eQnIwnhDuHQiSks3dy0zwrJydWU.jpg",
  genres: [{ id: 18, name: "drama" }],
  id: 711,
  original_title: "Finding Forrester",
  overview:
    "Gus Van Sant tells the story of a young African American man named Jamal who confronts his talents while living on the streets of the Bronx. He accidentally runs into an old writer named Forrester who discovers his passion for writing. With help from his new mentor Jamal receives a scholarship to a private school.",
  popularity: 9.791,
  poster_path: "/heHi6n68fDiQoUc7SMletM9Adjz.jpg",
  release_date: "2000-12-21",
  runtime: 136,
  title: "Finding Forrester",
  vote_average: 7.1,
  vote_count: 879,
};

function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const titles = ['Most popular on Godflex', `${user}${", " + "Keep Watching"}`, 'Trending Now', 'Coming Soon', 'Top Rated', 'Top Picks For You', `Title's You May Like` ];

  useEffect(() => {
    // if (user === "") navigate("/");
  }, []);

  return (
    <>
    <MediaPlayerModal {...mockMovie}/>
      <Hero/>
    <div className={styles.wrapper}>
    {titles.map((title, i) => <Slider sectionTitle={title} pageIndex={i + 1} key={i}/>)}
    </div>
      <Footer/>

    </>
  );
}

export default Home;
