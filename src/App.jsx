import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(80);
  const [weight, setWeight] = useState(180);

  const weightChange = (e) => {
    setWeight(e.target.value);
  };
  const heightChange = (e) => {
    setHeight(e.target.value);
  };
  const output = useMemo(() => {
    const calCulateHeight = height / 100;
    return (weight / (calCulateHeight * calCulateHeight)).toFixed(1);
  });
  return (
    <main className=" flex flex-col gap-2 items-center my-6">
      <h1 className="text-3xl heading font-bold bg-slate-600 rounded px-2 py-2 w-[80%] text-center text-white">
        BMI Calculator
      </h1>
      <div className="input-section w-[80%]    flex flex-col  items-center py-8 ">
        <p className="slider-output text-start">Weight: {weight} kg</p>
        <input
          type="range"
          step="1"
          min="10"
          max="120"
          className="input-slider"
          onChange={(e) => weightChange(e)}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          type="range"
          step="1"
          min="50"
          max="250"
          className="input-slider"
          onChange={(e) => heightChange(e)}
        />
      </div>
      <div className="output-section flex gap-2 items-center">
        <p className="text-xl">Your BMI is </p>
        <p className="output bg-slate-600 px-4 py-2 rounded text-white">
          {output}
        </p>
      </div>
      <div>
        {output >= 18.5 && output <= 24.9 ? (
          <p className="text-green-500"> Congrats You are Fit.</p>
        ) : (
          <p className="text-red-500">Oops You are not fit </p>
        )}
      </div>
    </main>
  );
};

export default App;
