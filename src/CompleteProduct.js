import WeightInGram from "./WeightInGram";
import React from "react";
import "./index";

const CompleteProduct = (props) => {
  return (
    <div>
      <div className="product-name"> Product : {props.productName}</div>
      <div>
        Weight : <WeightInGram />
      </div>
    </div>
  );
};

export default CompleteProduct;
