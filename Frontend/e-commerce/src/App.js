import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./components/nav";
// import Nav from "./pages/Nav";
import Home from "./pages/Home";
import { BASE_URL } from "./global";
import axios from "axios";
// import Home2 from "./components/home2";
function App() {
  const getItems = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/api/items`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getItems();

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Home />
      </main>
    </div>
  );
}

export default App;
