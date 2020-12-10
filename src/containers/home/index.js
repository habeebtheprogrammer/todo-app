import React from "react";
import "materialize-css";
import Navbar from "../../components/navbar";
import Addbox from "../../components/addbox";
import Checklists from "../../components/checklists";

const Home = () => {
  return (
    <>
      <Navbar />
      <Addbox />
      <Checklists />
    </>
  );
};

export default Home;
