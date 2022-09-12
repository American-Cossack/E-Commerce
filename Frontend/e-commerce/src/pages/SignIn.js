// import { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from axios
// const [Users, import2Users] = useState([]);
// const SignIn = (props) => {
//   // let navigate = useNavigate();
//   // const [formValues, setFormValues] = useState({ email: "", password: "" });
//   // const [loginToggle, setLoginToggle] = useState(false);
//   // const handleChange = (e) => {
//   //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   // };
//   // const toggleLogin = () => {
//   //   if (loginToggle === false) {
//   //     setLoginToggle(true);
//   //     console.log(loginToggle);
//   //   } else if (loginToggle === true) {
//   //     setLoginToggle(false);
//   //     console.log(loginToggle);
//   //   }
//   // };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   // };
//   const postUsers = async (req, res) => {
//     try {
//       let res = await axios.post(`${BASE_URL}/api/users`);
//       console.log(res.data);
//       set2Carts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     // postCarts();
//   }, []);
//   return (
//     <div>
//       <h1> You aren't signed in yet. Ple</h1>
//       <div>
//         <form onSubmit={handleSubmit}></form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
