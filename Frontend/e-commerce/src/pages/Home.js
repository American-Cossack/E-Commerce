import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>The Gundam Emporium</h1>
      <h2>
        Shipping to you directly from DFW, the Gundam Emporium provides the
        lowest and the fastest shipping for all your hobby needs!
      </h2>
      <section>
        <button onClick={() => navigate("/signin")}>
          Click here to get shopping.
        </button>
      </section>
      <section>
        <button onClick={() => navigate("/register")}>
          New here? Click here to register for the first time!
        </button>
      </section>
    </div>
  );
};

export default Home;
