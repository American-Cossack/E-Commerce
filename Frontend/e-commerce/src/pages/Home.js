import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import Greeting from "../components/Greeting";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
const Home = () => {
  let navigate = useNavigate();
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
