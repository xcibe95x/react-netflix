import { MediaPlayerCard } from "../components/MediaPlayerCard/MediaPlayerCard";
import { Slider } from "../components/Slider/Slider";
import { useContext, useEffect } from "react";
import { UserContext } from "../Interfaces";
import Hero from "../components/Hero/Hero";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (user === "") navigate("/");
  }, []);

  return (
    <>
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
