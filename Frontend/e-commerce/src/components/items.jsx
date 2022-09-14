import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../global";
import Home from "../pages/Home";
import "../Items.css"
const Items = (props) => {
const [items, get2Items] = useState([]);
let [formState, setFormState] = useState(null)
// const [parseItems, parse2Items ]= useState([])
// const [carts, set2Carts] = useState([])
const getItems = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/items`);
      console.log(res.data);
      get2Items(res.data);
      console.log(items)
    } catch (err) {
      console.log(err);
    }
  }; 
useEffect(()=> {
    getItems(); 
}, [])
const updateCart = async()=> {
  try {
    let res = await axios.put(`${BASE_URL}/api/carts`, formState);
    
    // setFormState(res.data);
  } catch (err) {
    console.log(err);
  }
}; 
const handleSubmit =  (itemID) => {
// console.log(items)
setFormState({id: itemID});
  console.log(formState); 
  updateCart()
}

useEffect(()=> {
  // postCarts(); 
}, [])
console.log(items) 
  if (!items ){
return <h2> loading</h2>}
    else {
      return ((items.map((item, index)=> (
        <p className="items-grid" key={index}> {item.Name} Description:{item.Description} <img src ={item.Image} className="img"></img>${item.Price} <button onClick={()=>handleSubmit(item.id)}>Add to Cart</button>
        </p> 
      )))
      )


}
}
  export default Items