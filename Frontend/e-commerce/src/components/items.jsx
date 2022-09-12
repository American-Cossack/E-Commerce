import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../global";
import Home from "../pages/Home";
import "../Items.css"
const Items = (props) => {
const [items, get2Items] = useState([]);
const [parseItems, parse2Items ]= useState([])
const [carts, set2Carts] = useState([])
const getItems = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/items`);
      console.log(res.data);
      get2Items(res.data);
    } catch (err) {
      console.log(err);
    }
  }; useEffect(()=> {
    getItems(); 
}, [])
const postCarts = async (req, res) => {
  try {
    let res = await axios.post(`${BASE_URL}/api/carts`);
    console.log(res.data);
    set2Carts(res.data);
  } catch (err) {
    console.log(err);
  }
}; useEffect(()=> {
  // postCarts(); 
}, [])
console.log(items) 
  if (!items ){
return <h2> loading</h2>}
    else {
      return ((items.map((item)=> (
        <p className="items-grid">{item.Name} Description:{item.Description} <img src ={item.Image} className="img"></img>${item.Price} <button>Add to Cart</button>
        </p> 
      )))
      )


}
}
  export default Items