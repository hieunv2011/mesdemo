import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/modules/solid-gauge";

const Ichart: React.FC = () => {
  const [value, setValue] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        let newValue = prev + Math.round((Math.random() - 0.5) * 20);
        return newValue < 0 || newValue > 200 ? prev : newValue;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "gauge",
      height: 300,
    },
    title: { 
        text: "Cường độ dòng điện",
        align: "center",
        y: 40, 
     },
    credits: { enabled: false },
    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background: null,
      center: ["50%", "75%"],
      size: "110%",
    },
    yAxis: {
      min: 0,
      max: 200,
      tickPixelInterval: 72,
      tickPosition: "inside",
      tickLength: 20,
      tickWidth: 2,
      labels: {
        distance: 20,
        style: { fontSize: "14px" },
      },
      lineWidth: 0,
      plotBands: [
        { from: 0, to: 130, color: "#55BF3B", thickness: 20 },
        { from: 150, to: 200, color: "#DF5353", thickness: 20 },
        { from: 120, to: 160, color: "#DDDF0D", thickness: 20 },
      ],
    },
    series: [
      {
        type: "gauge",
        data: [value],
        tooltip: { valueSuffix: " Ampe" },
        dataLabels: {
          format: "{y} Ampe",
          borderWidth: 0,
          style: { fontSize: "16px" },
        },
        dial: {
          radius: "80%",
          backgroundColor: "gray",
          baseWidth: 12,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: {
          backgroundColor: "gray",
          radius: 6,
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Ichart;
