"use client"
import React from "react";
import {readTextFile} from "./getData";
import Plot from "react-plotly.js";
import {arrayA,arrayB} from "./getData"

export function App(){
  const file = "C:/ademar/ponto_1_XRF_6.txt"
  const handleClick = () => {
    readTextFile(file);
  }
  return(
    <>
      <button onClick={handleClick}>
        cleiton
      </button>
      <Plot
        data={[
          {
            x:arrayA,
            y:arrayB,
            mode:"markers",
            type:"scatter",
          }
        ]}
      />
    </>
  )
}

