import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Authentication.module.css";
import { useSendData } from "../../helper/util";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const sendData = useSendData();
  const [errors, setErrors] = useState(
    {}
  );

  const validate = () => {
    const newErrors = {};
    if (!email.includes("@")) {
      newErrors.email = "Invalid email address";
      }
      if (!email.includes(".")) {
        newErrors.email = "Invalid email address";
        }
        if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const data = { email: email, password: password };
        const response = await sendData("POST", "login", false, data);

        if (response.token) {
          localStorage.setItem("token", response.token);
        } else {
          throw new Error("Authentication failed");
        }
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={classes.div}>
      <h1 className={classes.h1}>Login</h1>
      <p>{errors.email && errors.email}</p>
      <p>{errors.password && errors.password}</p>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
        </div>
        <div className={classes.flex}>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <Link to="/register" className={classes.link}>
              Don't have an account? Create one!
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
