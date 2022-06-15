import { MediaPlayerCard } from "../components/MediaPlayerCard/MediaPlayerCard";
import { Slider } from "../components/Slider/Slider";
import { useContext } from "react";
import { UserContext } from "../Interfaces";
import Hero from "../components/Hero/Hero";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>

      <Hero />
      <h1>Pagina Principale Godflex</h1>
      <h3>Logged user: {user}</h3>
      <Slider/>
      <Slider/>
      <Slider/>
      <Slider/>
      <Slider/>
    </>
  );
}

export default Home;
