import { useNavigate } from "react-router-dom";

const UserGreeting = () => {
let navigate = useNavigate();
    return ( 
    <div>
      <h1>Welcome sir!</h1>
      <section>
          <button onClick={() => navigate("/items")}>
            Click here to get shopping.
          </button>
        </section></div>)
  }
  
  export default UserGreeting