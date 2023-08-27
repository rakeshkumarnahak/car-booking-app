import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";

const Login = () => {
  const history = useNavigate();
  // const URL = "https://car-booking-five.vercel.app/";
  const { email, password, setEmail, setPassword } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();

    try {
      // const res = await axios.post(`${URL}/login`, {
      //   email,
      //   password,
      // });
      // console.log(res);

      let data = JSON.stringify({
        email: "priyanshupanda.ctp@gmail.com",
        password: "priyanshu",
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://car-booking-five.vercel.app/api/auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(response.data);

      if (response.status === 200) {
        window.alert("Login Successful");
        history("/home");
      } else {
        window.alert("User have not sign up");
        console.log("Please SignUp");
      }
    } catch (error) {
      console.log(error);
      window.alert("Please SignUp");
      console.log("User have not sign up");
    }
  };

  return (
    <>
      <div className="container pt-4">
        <div className="row mt-5">
          <div className="col-lg-4 bg-white m-auto rounded-top wrapper">
            <h2 className="text-center pt-3 ">Login Now</h2>
            <form onSubmit={submit} className="py-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
                <p className="text-center mt-3">
                  Register Now for Free by Clicking{" "}
                  <a href="/register">Register Now</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
