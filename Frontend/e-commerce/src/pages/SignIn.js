import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SignInCoach } from "../services/Auth";
import { SignInPlayer } from "../services/Auth";

const SignIn = (props) => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [loginToggle, setLoginToggle] = useState(false);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const toggleLogin = () => {
    if (loginToggle === false) {
      setLoginToggle(true);
      console.log(loginToggle);
    } else if (loginToggle === true) {
      setLoginToggle(false);
      console.log(loginToggle);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
};

return (
  <div>
    <h1> Sign in Here!</h1>
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  </div>
);
