import React from "react";
import "./home.scss";

//icons
import { AcUnit } from "@material-ui/icons";
import NavBar from "../components/navbar/NavBar";
import Featured from "../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured/>
    </div>
  );
};

export default Home;
