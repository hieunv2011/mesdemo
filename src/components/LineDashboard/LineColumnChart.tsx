import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineColumnChart: React.FC = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 200,
    },
    title: {
      text: "",
      style: { fontSize: "14px", color: "#fff" },
    },
    xAxis: {
      categories: ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
      title: { text: "" },
      labels: { style: { color: "#fff" } },
    },
    yAxis: {
      min: 0,
      title: { text: "", style: { color: "#fff" } },
      labels: { style: { color: "#fff" } },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
      style: { color: "#fff" },
    },
    series: [
      {
        type: "column",
        name: "Thời gian lỗi dự kiến",
        data: [1, 3, 4, 8, 9, 1],
        color: "#1890ff",
      },
    ],
    credits: { enabled: false },
    exporting: { enabled: false },
    legend: { enabled: false, itemStyle: { color: "#fff" } },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineColumnChart;
