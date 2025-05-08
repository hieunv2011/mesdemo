import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/modules/solid-gauge";
import { useAtom } from "jotai";
import { websocketDataAtom } from "../../stores/websocketStore";

const GaugeChart: React.FC = () => {
  const [websocketData] = useAtom(websocketDataAtom);

  const oee = websocketData?.oee ?? 0; // Default to 0 if OEE is not available
  const oeePercent = +(oee * 100).toFixed(1); // Convert OEE to percentage

  const getColor = (value: number) => {
    if (value > 70) return "#55BF3B";
    if (value > 40) return "#DDDF0D";
    return "#DF5353";
  };

  const options: Highcharts.Options = {
    chart: {
      type: "solidgauge",
      height: 300,
    },
    title: { text: "" },
    credits: { enabled: false },
    pane: {
      center: ["50%", "85%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          backgroundColor: "#fafafa", // Sửa lỗi: Đặt trong một mảng
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
        y: -100,
        style: {
          fontSize: "24px",
          color: "black",
        },
      },
    },
    series: [
      {
        type: "solidgauge",
        name: "OEE",
        data: [
          {
            color: getColor(oeePercent),
            radius: "100%",
            innerRadius: "70%",
            y: oeePercent,
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
          valueSuffix: "%",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default GaugeChart;
