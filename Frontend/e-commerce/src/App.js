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
// import Home2 from "./components/home2";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/items" element={<Items />} />
        </Routes>
        <Home />
        {/* <Items /> */}
      </main>
    </div>
  );
}

export default App;
