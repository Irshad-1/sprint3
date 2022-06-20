import React from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = React.useContext(AuthContext);

  return <div>Home</div>;
};

export default Home;
