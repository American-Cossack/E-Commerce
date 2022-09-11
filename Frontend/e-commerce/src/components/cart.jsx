import axios from "axios";
import { BASE_URL } from "../global";

const Cart = () => {

const getCarts = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/Carts`);
      console.log(res.data);
      res.send(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getCarts();
}
  export default Cart