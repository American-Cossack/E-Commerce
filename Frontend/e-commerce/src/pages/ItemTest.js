import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [chars, setChars] = useState({});

  async function getChars() {
    const res = await axios.get("localhost:3001");
  }
};
