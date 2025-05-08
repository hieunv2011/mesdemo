import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SeriesOptionsType } from "highcharts";

const errorData = [
  { name: "Lỗi cảm biến", data: [5, 7, 9, 12, 14, 8, 6, 10, 15, 7] },
  { name: "Quá nhiệt", data: [3, 6, 11, 13, 9, 12, 8, 5, 14, 10] },
  { name: "Dao động nguồn điện", data: [2, 5, 8, 10, 12, 7, 6, 9, 11, 13] },
  { name: "Lỗi phần mềm", data: [4, 8, 12, 15, 10, 5, 6, 11, 9, 7] },
];

const timeLabels = ["10:11", "10:12", "10:13", "10:14", "10:15", "10:16", "10:17", "10:18", "10:19", "10:20"];

const options: Highcharts.Options = {
  chart: {
    type: "spline",
  },
  credits: { enabled: false },
  title: {
    text: "Giám sát lỗi máy",
    align: "center",
  },
  xAxis: {
    categories: timeLabels,
    title: {
      text: "Thời gian (giây)",
    },
  },
  yAxis: {
    title: {
      text: "Mức độ lỗi",
    },
    plotLines: [
      {
        value: 10,
        color: "red",
        width: 2,
        dashStyle: "Dash",
        label: {
          text: "Ngưỡng lỗi",
          align: "right",
          style: { color: "red" },
        },
      },
    ],
  },
  series: [
    ...errorData.map((error) => ({
      type: "line",
      name: error.name,
      data: error.data,
    })) as SeriesOptionsType[],
    {
      type: "line",
      name: "Ngưỡng lỗi",
      data: new Array(timeLabels.length).fill(10),
      color: "red",
      dashStyle: "Dash",
      enableMouseTracking: false,
    } as SeriesOptionsType,
  ],
};

const StateLineChart: React.FC = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StateLineChart;