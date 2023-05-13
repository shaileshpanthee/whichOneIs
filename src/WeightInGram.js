import { useState } from "react";
import React from "react";

const kgToGram = (a) => {
  return (a * 1000).toFixed(2);
};
const lbToGram = (a) => {
  return (a * 453.592).toFixed(2);
};
const ozToGram = (a) => {
  return (a * 28.3495).toFixed(2);
};

const WeightInGram = () => {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");

  console.log(weight);
  const weightInGrams = (weight, unit) => {
    if (unit === "kg") {
      return kgToGram(weight);
    } else if (unit === "lb") {
      return lbToGram(weight);
    } else if (unit === "oz") {
      return ozToGram(weight);
    } else if (unit === "gm") {
      return weight;
    }
  };
  return (
    <div>
      <form>
        <input
          placeholder="Weight of Product"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </form>
      <br />
      Select the Unit
      <form>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="pls_select">Select One</option>
          <option value="gm">Gram (gm) </option>
          <option value="kg">Kilogram (kg)</option>
          <option value="oz"> Ounce (oz)</option>
          <option value="lb"> Pound (lb)</option>
        </select>
      </form>{" "}
      <br />
      <div>
        Price of product:
        <form>
          <input
            placeholder="Price of product"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
      </div>
      <br />
      <div>
        Price per gram :{" "}
        <b>{(price / weightInGrams(weight, unit)).toFixed(3)}</b>
      </div>
    </div>
  );
};

export default WeightInGram;
