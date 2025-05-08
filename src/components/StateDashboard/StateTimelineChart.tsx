import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StateTimelineChart: React.FC = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      height: 120,
    },
    title: {
      text: "Timeline lỗi",
    },
    credits: { enabled: false },
    plotOptions: {
      bar: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          y: 20,
          verticalAlign: "bottom",
        },
        accessibility: {
          exposeAsGroupOnly: true,
        },
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> ' +
        "<b>{series.name}: {point.y}</b>",
    },
    accessibility: {
      typeDescription:
        'Stacked bar "force" chart. Positive forces ' +
        "are shown on the right side and negative on the left.",
      series: {
        descriptionFormat:
          "Series {add series.index 1} of " +
          "{chart.series.length}, Name: {series.name}, " +
          "{#if (gt series.points.0.y 0)}accelerating" +
          "{else}decelerating{/if} value of {series.points.0.y}.",
      },
    },
    exporting:{
        enabled: false,
    },
    yAxis: {
      reversedStacks: false,
      opposite: true,
      labels: {
        enabled: false,
      },
      title: "",
      accessibility: {
        description: "",
      },
      stackLabels: {
        enabled: false,
        verticalAlign: "top",
        style: {
          fontSize: "1.2em",
        },
        format: "{#if isNegative}Min{else}Max{/if}: {total}",
      },
      startOnTick: false,
      endOnTick: false,
    },
    xAxis: {
      visible: false,
      title: "",
      accessibility: {
        description: "",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Initial Entry Speed",
        data: [4],
        color: "rgb(255, 7, 77)", // Màu đỏ
      },
      {
        name: "Martian Gravity",
        data: [2],
        color: "rgb(1, 127, 250)", // Màu xanh dương
      },
      {
        name: "Atmospheric Drag (Re-entry)",
        data: [3],
        color: "rgb(255, 165, 0)", // Màu cam
      },
      {
        name: "Parachute Drag",
        data: [2],
        color: "rgb(0, 255, 0)", // Màu xanh lá
      },
      {
        name: "Heat Shield Separation",
        data: [1],
        color: "rgb(0, 0, 255)", // Màu xanh dương đậm
      },
      {
        name: "Retro Rockets (Powered decent)",
        data: [2],
        color: "rgb(255, 0, 255)", // Màu fuchsia
      },
      {
        name: "Sky Crane Operation",
        data: [2],
        color: "rgb(139, 69, 19)", // Màu nâu
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StateTimelineChart;
