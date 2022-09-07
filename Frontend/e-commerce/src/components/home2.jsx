import { useNavigate } from "react-router-dom";

const Home2 = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>The Gundam Emporium</h1>
      <h2>
        Shipping to you directly from DFW, the Gundam Emporium provides the
        lowest and the fastest shipping for all your hobby needs!
      </h2>
    </div>
  );
};

export default Home2;
