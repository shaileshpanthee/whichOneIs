import CompleteProduct from "./CompleteProduct";
import React from "react";
import "./index.css";

const AllProducts = () => {
  return (
    <div>
      <div className="intro">
        Compare Price of a product when two or more of them are available at
        different price points and different weights
        <br />
        Comes handly while purchasing groceries <br />
        The lowest Price per Gram is the best value for your hard earned money
        <br />
      </div>
      <div className="all_cards">
        <div className="card">
          <CompleteProduct productName="A" />
        </div>
        <div className="card">
          <CompleteProduct productName="B" />
        </div>
        <div className="card">
          <CompleteProduct productName="C" />
        </div>
        <div className="card">
          <CompleteProduct productName="D" />
        </div>
        <div className="card">
          <CompleteProduct productName="E" />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
