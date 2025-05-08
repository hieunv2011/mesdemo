import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/modules/solid-gauge";
import { getAllMachines } from "../../services/machineService";

const GaugeChart: React.FC = () => {
  const value = 50; // Cài số cứng

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const machines = await getAllMachines();
        console.log("Fetched machines:", machines); // Log dữ liệu ra console
      } catch (error) {
        console.error("Error fetching machines:", error);
      }
    };

    fetchMachines();
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "solidgauge",
      height: 280,
    },
    title: { text: "" },
    credits: { enabled: false },
    pane: {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          backgroundColor: "#fafafa", // Đặt trong một mảng
          borderRadius: 5,
          innerRadius: "70%",
          outerRadius: "100%",
          shape: "arc",
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
      title: {
        text: "OEE",
        style: {
          fontSize: "24px",
          fontWeight: "bold",
          color: "black",
        },
        y: 20,
      },
    },
    series: [
      {
        type: "solidgauge",
        data: [
          {
            color: value > 70 ? "#55BF3B" : value > 40 ? "#DDDF0D" : "#DF5353",
            radius: "100%",
            innerRadius: "70%",
            y: value,
          },
        ],
        dataLabels: {
          y: -60,
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:25px">{y}</span><br/>' +
            '<span style="font-size:12px;opacity:0.4">%</span>' +
            "</div>",
        },
        tooltip: {
          valueSuffix: " %",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default GaugeChart;
