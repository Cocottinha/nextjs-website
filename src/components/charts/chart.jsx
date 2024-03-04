"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicPlot = dynamic(() => import('react-plotly.js'), { ssr: false });

const PlotComponent = ({ x,y }) => {
  // const [plotLoaded, setPlotLoaded] = useState(false);

  // useEffect(() => {
  //   setPlotLoaded(true);
  // }, []);

  // if (!plotLoaded) return <div>Loading Plot...</div>;

  const xValues = x;
  const yValues = y;

  return (
    <div>
      <h2>My Plot</h2>
      <DynamicPlot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'blue' },
          },
        ]}
        layout={{ width: 800, height: 600, title: 'My Plot' }}
      />
    </div>
  );
};

export default PlotComponent;
