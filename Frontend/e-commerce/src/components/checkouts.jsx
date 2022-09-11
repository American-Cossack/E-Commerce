import axios from "axios";
import { BASE_URL } from "../global";

const Checkouts = () => {

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
}
  export default Checkouts