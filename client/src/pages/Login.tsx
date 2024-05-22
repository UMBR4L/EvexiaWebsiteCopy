import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo_animated from "../assets/logos/hero-animation.gif";
import tl from "../assets/art/corner-prop-08.svg";
import tr from "../assets/art/corner-prop-09.svg";
import bl from "../assets/art/corner-prop-10.svg";
import br from "../assets/art/corner-prop-11.svg";
import logo from "../assets/logos/Sideways.png";
import styles from "../style";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        // setAuthToken(data.token); // Update the context
        navigate("/app/dashboard");
      } else {
        // Handle error
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row mt-[94px] md:mt-0 absolute bg-secondary w-full  h-full items-center md:justify-around ">
        <div className="bg-white  md:w-[60%] h-full hidden md:flex md:flex-col w-full items-center justify-center rounded-r-3xl">
          <div className="mb-4">
            <img src={tl} className={`w-[150px] animate-slide-left`} />
            <img src={tr} className={`w-[150px] animate-slide-right`} />
          </div>
          <h1 className={`${styles.merri} text-4xl text-secondary m-10`}>
            Hey, glad to see you again!
          </h1>
          <div className="mt-4">
            <img src={bl} className={`w-[150px] animate-slide-right`} />
            <img src={br} className={`w-[150px] animate-slide-left`} />
          </div>
        </div>

        <div className="flex md:mx-5  md:w-[40%] h-full justify-center items-center">
          <div
            className="z-3 h-[500px] p-[30px] mt-10 justify-center bg-white w-[350px] md:w-[400px] 
      items-center rounded-3xl border-navBarSecondary border-4 drop-shadow-md mb-10"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 w-full justify-center h-3/4"
            >
              <div className="items-center justify-center flex flex-col space-y-3 ">
                {/* <label htmlFor="email">Email:</label> */}
                <img src={logo} className="p-4" />

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  className="rounded-md h-[40px] w-full  border-[1px] px-5
               border-navBarSecondary focus:outline-none focus:border-malibu focus:ring-malibu focus:ring-1
               focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="rounded-md h-[40px] w-full  border-[1px] px-5
               border-navBarSecondary focus:outline-none focus:border-malibu focus:ring-malibu focus:ring-1"
                  placeholder="Password"
                />
              </div>

              <button
                className={`bg-secondary text-primary px-5 py-2 rounded-xl p-4 drop-shadow-lg border-4 border-dimPrimary font-semibold tracking-wider  hover:opacity-95`}
                type="submit"
              >
                Log in
              </button>

              <div className="flex w-full h-[1px] bg-navBarSecondary"></div>

              <div className="flex items-center justify-center">
                <Link
                  to="/register"
                  className={`bg-tree w-1/2 text-white px-5 py-2 rounded-xl  drop-shadow-sm border-2 border-navBarSecondary text-center ${styles.pop_sm}`}
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
