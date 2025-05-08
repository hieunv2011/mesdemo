import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/highcharts-3d";

interface LineCircleChartProps {
  data: { active: number; maintenance: number };
}

const LineCircleChart: React.FC<LineCircleChartProps> = ({ data }) => {
  const active = data.active;
  const maintenance = data.maintenance;
  const total = active + maintenance;
  const activePercentage = ((active / total) * 100).toFixed(1) + "%";

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
      height: 150,
      margin: 10,

      backgroundColor: "transparent",
    },
    credits: { enabled: false },
    exporting: { enabled: false },
    title: {
      text: `${activePercentage}<br>Tổng: ${total}`,
      align: "center",
      verticalAlign: "middle",
      y: 20,
      style: {
        fontSize: "12px",
        fontWeight: "bold",
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 30,
        size: "150%",
        innerSize: "80%",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Share",
        data: [
          { name: `Hoạt động: ${active}`, y: active, color: "#28a745" },
          { name: `Đang bảo trì: ${maintenance}`, y: maintenance, color: "#ffc107" },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineCircleChart;
