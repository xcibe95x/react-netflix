import { MediaPlayerCard } from "../components/MediaPlayerCard/MediaPlayerCard";
import { Slider } from "../components/Slider/Slider";
import { useContext, useEffect } from "react";
import { Movie, UserContext } from "../Interfaces";
import Hero from "../components/Hero/Hero";
import { useNavigate } from "react-router-dom";
import { METHODS } from "http";

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

  useEffect(() => {
    // if (user === "") navigate("/");
  }, []);

  return (
    <>
    <MediaPlayerCard {...mockMovie}/>
      <Hero />
      <h3>Logged user: {user}</h3>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </>
  );
}

export default Home;
