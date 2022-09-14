import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../global";

const Cart = (props) => {
const [items1, get2Items] = useState([]);
const [carts, setCarts] = useState([])

useEffect(()=> {
const getCarts = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/Carts`);
      console.log(res.data);
      setCarts(res.data);
    } catch (err) {
      console.log(err);
    }getCarts();
  };},[])

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

console.log(items1)
  if (!items1 ){
return <h2> loading</h2>}
    else {
      return  (
      <div>
        <h1>Your Cart</h1>
      <p className="items-grid"> {items1.Name} Description:{items1.Description} <img src ={items1.Image} className="img"></img>Total Price: ${items1.Price} 
        </p> </div>)
  

  
}}
  export default Cart