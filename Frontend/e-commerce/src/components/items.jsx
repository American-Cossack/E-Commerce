import axios from "axios";
import { BASE_URL } from "../global";

const Items = () => {

const getItems = async (req, res) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/items`);
      console.log(res.data);
      res.send(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getItems();
}
  export default Items