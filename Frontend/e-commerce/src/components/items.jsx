import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../global";
import Home from "../pages/Home";
import "../Items.css"
const Items = (props) => {
const [items, get2Items] = useState([]);
const [formState, setFormState] = useState([])
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
const handleSubmit = async (e) => {
// console.log(items)
  (items.map((item)=> (item= formState)))
  try {
    let res = await axios.put(`${BASE_URL}/api/carts`, formState);
    console.log(formState);
    setFormState(res.data);
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
        <p className="items-grid">{item.Name} Description:{item.Description} <img src ={item.Image} className="img"></img>${item.Price} <button onClick={handleSubmit}>Add to Cart</button>
        </p> 
      )))
      )


}
}
  export default Items