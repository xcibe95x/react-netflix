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
    </>
  );
}

export default Home;
