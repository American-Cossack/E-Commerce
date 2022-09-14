import { useNavigate } from "react-router-dom";
const Landing = () => {
  let navigate = useNavigate();
  return (
    <div>
      {" "}
      <h1> Thank you for shopping here!</h1>
      <button onClick={() => navigate("/home")}>
        Please click here to return to the home page!
      </button>
    </div>
  );
};

export default Landing;
