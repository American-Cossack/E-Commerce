import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../global';

const Greeting = (props) => {
  const [Users, import2Users] = useState([]);
  const postUsers = async (req, res) => {
    try {
      let res = await axios.post(`${BASE_URL}/api/users`);
           import2Users(res.data); 
           console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    
  }, []);

  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return( <UserGreeting /> )
  }
  return <GuestGreeting />
}

export default Greeting