import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./components/nav";
// import Nav from "./pages/Nav";
import Home from "./pages/Home";
import { BASE_URL } from "./global";
import axios from "axios";
import Items from "./components/items";
import Cart from "./components/cart";
// import Home2 from "./components/home2";
import Greeting from "./components/Greeting";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

import Checkouts from "./components/checkouts";
import Landing from "./pages/LandPage";
function App() {
  const [isLoggedIn, toggleLogin] = useState(false);

  const handleLoginClick = () => toggleLogin(true);

  const handleLogoutClick = () => toggleLogin(false);

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        {/* <Home /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkouts />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
