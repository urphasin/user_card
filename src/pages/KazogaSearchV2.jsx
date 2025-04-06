import React from "react";
import Navbar from "../components/Navbar";

const KazogaSearchV2 = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>Kazoga Search V2</h1>
      <div>
        <h2>Enter your Search</h2>
        <form>
          <input type='search' className="w-3xl p-4 border-2 border-amber-300"/>
          <button className="text-2xl m-2 p-4 bg-amber-500 rounded-2xl">Go</button>
        </form>
      </div>
    </>
  );
};

export default KazogaSearchV2;
