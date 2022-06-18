import React, { FC, useState } from "react";
import ReactDOM from "react-dom/client";
import UserSelect from "./main/UserSelect";
import "./style.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import { Movie, UserContext, User } from "./Interfaces";
import Dialog from "./components/Dialog/Dialog";

const mockMovie: Movie = {
  backdrop_path: "/eQnIwnhDuHQiSks3dy0zwrJydWU.jpg",
  genres: [{ id: 18, name: "drama" }],
  id: 712,
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const allUsers: User[] = [
  { name: "Zeus", profilePic: "zeus.jpg" },
  { name: "Ade", profilePic: "ade.webp" },
  { name: "Poseidone", profilePic: "poseidone.jpg" },
  { name: "Apollo", profilePic: "apollo.webp" }
]

const App: FC = () => {
  // currently logged user
  const [loggedUser, setLoggedUser] = useState<User>({name: "", profilePic: ""});

  return (
    <UserContext.Provider value={{ loggedUser: loggedUser, setUser: setLoggedUser, users: allUsers }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserSelect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dialog" element={<Dialog {...mockMovie} />} />
          <Route path="*" element={<h1>404 Nun se truvat</h1>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
