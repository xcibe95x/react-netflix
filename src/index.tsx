import React, { FC, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { User, UserContext } from "./Interfaces";
import Home from "./main/Home";
import UserSelect from "./main/UserSelect";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const allUsers: User[] = [
  { name: "Zeus", profilePic: "zeus.jpg" },
  { name: "Ade", profilePic: "ade.webp" },
  { name: "Poseidone", profilePic: "poseidone.jpg" },
  { name: "Apollo", profilePic: "apollo.webp" },
];

const App: FC = () => {
  // currently logged user
  const [loggedUser, setLoggedUser] = useState<User>({ name: "", profilePic: "" });

  return (
    <UserContext.Provider value={{ loggedUser: loggedUser, setUser: setLoggedUser, users: allUsers }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserSelect />} />
          <Route path="/home" element={<Home />} />
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
