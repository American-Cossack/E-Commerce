import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";
import Greeting from "../components/Greeting";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import axios from "axios";
import { BASE_URL } from "../global";
const Home = () => {
  let navigate = useNavigate();
  const [isLoggedIn, toggleLogin] = useState(false);
  const [Users, import2Users] = useState([]);
  const [Carts, import2Carts] = useState([]);
  const TrueHandleLoginClick = () => {
    toggleLogin(true);
    const postUsers = async (req, res) => {
      try {
        let res = await axios.post(`${BASE_URL}/api/users`);
        import2Users(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const deleteUsers = async (req, res) => {
      try {
        let res = await axios.delete(`${BASE_URL}/api/users`);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const postCarts = async (req, res) => {
      try {
        let res = await axios.post(`${BASE_URL}/api/carts`);
        import2Carts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    deleteUsers();
    postUsers();
    postCarts();
  };

  const handleLogoutClick = () => toggleLogin(false);

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={TrueHandleLoginClick} />;
  }
  return (
    <div className="title">
      <h1>The Gundam Emporium</h1>
      <h2>
        Shipping to you directly from DFW, the Gundam Emporium provides the
        lowest and the fastest shipping for all your hobby needs!
      </h2>
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <section></section>
      </div>
    </div>
  );
};

export default Home;
