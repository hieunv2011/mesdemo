import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./chart.css";

const energyData = [
  [Date.UTC(2024, 2, 1), 80], [Date.UTC(2024, 2, 2), 95], [Date.UTC(2024, 2, 3), 100],
  [Date.UTC(2024, 2, 4), 70], [Date.UTC(2024, 2, 5), 85], [Date.UTC(2024, 2, 6), 110],
  [Date.UTC(2024, 2, 7), 120], [Date.UTC(2024, 2, 8), 90], [Date.UTC(2024, 2, 9), 105],
  [Date.UTC(2024, 2, 10), 95], [Date.UTC(2024, 2, 11), 100], [Date.UTC(2024, 2, 12), 80],
  [Date.UTC(2024, 2, 13), 115], [Date.UTC(2024, 2, 14), 130], [Date.UTC(2024, 2, 15), 90],
  [Date.UTC(2024, 2, 16), 75], [Date.UTC(2024, 2, 17), 85], [Date.UTC(2024, 2, 18), 95],
  [Date.UTC(2024, 2, 19), 105], [Date.UTC(2024, 2, 20), 110], [Date.UTC(2024, 2, 21), 120],
  [Date.UTC(2024, 2, 22), 130], [Date.UTC(2024, 2, 23), 125], [Date.UTC(2024, 2, 24), 115],
  [Date.UTC(2024, 2, 25), 105], [Date.UTC(2024, 2, 26), 95], [Date.UTC(2024, 2, 27), 85],
  [Date.UTC(2024, 2, 28), 80], [Date.UTC(2024, 2, 29), 75], [Date.UTC(2024, 2, 30), 70],
  [Date.UTC(2024, 2, 31), 65],
];

const EnergyChart = () => {
  const [chartOptions, setChartOptions] = useState({
    rangeSelector: { selected: 1 },
    title: { text: "Lượng điện tiêu thụ (KWh)" },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          const date = new Date(this.value);
          return date.getDate() + "/" + (date.getMonth() + 1);
        },
      },
    },
    yAxis: { title: { text: "kWh" } },
    credits: { enabled: false },
    series: [
      {
        type: "column",
        name: "Tiêu thụ (kWh)",
        data: energyData,
        color: "#007bff",
      },
    ],
  });

  useEffect(() => {
    setChartOptions((prev) => ({
      ...prev,
      series: [{ ...prev.series[0], data: energyData }],
    }));
  }, []);

  return <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={chartOptions} />;
};

export default EnergyChart;