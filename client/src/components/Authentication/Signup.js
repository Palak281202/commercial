import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Authentication.module.css";
import { useSendData } from "../../helper/util";
import toast from "react-hot-toast";

const Signup= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const sendData = useSendData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      console.log("error");
      return;
    }
    try {
      await sendData("POST", "register", false, {
        email: email,
        name: name,
        password: password,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={classes.div} style={{ height: "98vh" }}>
      <h2 className={classes.h1}>Signup</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        {error}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={3}
            maxLength={30}
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
        <div>
          <label htmlFor="cpassword">Confirm:</label>
          <input
            id="cpassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
