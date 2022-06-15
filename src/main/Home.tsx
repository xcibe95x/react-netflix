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
      <h1>Pagina Principale Godflex</h1>
      <h3>Logged user: {user}</h3>
    </>
  );
}

export default Home;
