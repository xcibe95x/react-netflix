import React, { FC, useState } from "react";
import ReactDOM from "react-dom/client";
import UserSelect from "./main/UserSelect";
import reportWebVitals from "./reportWebVitals";
import "./style.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import { UserContext } from "./Interfaces";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const App: FC = () => {
  // currently logged user
  const [loggedUser, setLoggedUser] = useState("");

  return (
    <UserContext.Provider value={{ user: loggedUser, setUser: setLoggedUser }}>
      <Navbar />
      <BrowserRouter>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
