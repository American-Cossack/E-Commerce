import axios from "axios";
import { BASE_URL } from "../global";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkouts = () => {
  let navigate = useNavigate();
  const [items1, get2Items] = useState([]);
  const getItems = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/items/pk`);
      console.log(res.data);
      get2Items(res.data);
      
    } catch (err) {
      console.log(err);
    }
  }; 
useEffect(()=> {
    getItems(); 
}, [])



const getCheckouts = async (req, res) => {

    try {
      let res = await axios.get(`${BASE_URL}/api/carts`);
      console.log(res.data);
      res.send(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getCheckouts();


  return (<div>
    <h1> Checkout</h1>
<h3> Your total is ${items1.Price}</h3>
<h2> Please provide your Payment and Shipping info here.</h2>
<input placeholder="Address"></input>
<input placeholder="Telephone Number"></input>
<input placeholder="Credit Card Number"></input>
<button onClick={() => navigate("/landing")}>Click here to submit</button>
</div>)

}
  export default Checkouts