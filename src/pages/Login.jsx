import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return (
    <div>
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
    </div>
  );
};

export default Login;
