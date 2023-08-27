import React from "react";
import YourWolfPack from "./YourWolfPack";
import AllWolfPack from "./AllWolfPack";
import TopCards from "../Dashboard/TopCards";

const Wolfpacks = () => {
  return (
    <div style={{ color: "#fff" }}>
      <TopCards />
      <YourWolfPack />
      <AllWolfPack />
    </div>
  );
};

export default Wolfpacks;
