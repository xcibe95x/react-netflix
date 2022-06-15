import { useContext, useEffect } from "react";
import { UserContext } from "../Interfaces";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Pagina Principale Godflex</h1>
      <h3>Logged user: {user}</h3>
    </>
  );
}

export default Home;
