import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../global";

const Cart = () => {

const [items, setItems] = useState([])
useEffect(()=> {
const getCarts = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/Carts`);
      console.log(res.data);
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }getCarts();
  };},[])
  return (
    <ul>
    This is Carts</ul>
  )
  
}
  export default Cart