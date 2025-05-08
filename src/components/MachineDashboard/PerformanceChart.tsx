import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/highcharts-3d";
import { useAtom } from "jotai";
import { websocketDataAtom } from "../../stores/websocketStore";

const PerformanceChart: React.FC = () => {
  const [websocketData] = useAtom(websocketDataAtom);

  const getValue = (key: keyof typeof websocketData, defaultValue: number = 0) =>
    typeof websocketData?.[key] === "number" ? websocketData[key] : defaultValue;

  const performance = getValue("performance");
  const productOk = getValue("product_ok");
  const productNg = getValue("product_ng");
  const runningTime = getValue("running_time");

  const performancePercent = +(performance * 100).toFixed(1);
  const cycle =
    runningTime && productOk + productNg !== 0
      ? (performance * runningTime) / (productOk + productNg)
      : 0;
  const cycleValue = isNaN(cycle) ? "0" : cycle.toFixed(0);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
      options3d: { enabled: true, alpha: 45, beta: 0 },
      height: 150,
      margin: 10,
      backgroundColor: "transparent",
    },
    credits: { enabled: false },
    exporting: { enabled: false },
    title: {
      text: `${performancePercent}%`,
      align: "center",
      verticalAlign: "middle",
      y: 30,
      style: { fontSize: "18px", fontWeight: "bold" },
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
        dataLabels: { enabled: false },
      },
    },
    series: [
      {
        type: "pie",
        name: "Tỷ lệ",
        data: [
          {
            name: `Hiệu suất: ${performancePercent}%`,
            y: performancePercent,
            color: "#28a745",
          },
          {
            name: "Tỷ lệ còn lại",
            y: 100 - performancePercent,
            color: "#ffc107",
          },
        ],
      },
    ],
  };

  const data = [
    { status: "Sản phẩm OK", value: productOk },
    { status: "Sản phẩm lỗi", value: productNg },
    { status: "Chu kỳ", value: cycleValue },
  ];

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div className="font-semibold text-center">HIỆU SUẤT</div>
      {data.map(({ status, value }, index) => (
        <div
          key={index}
          className="flex justify-between border-b last:border-none py-1 mx-2"
        >
          <span className="w-full">{status}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default PerformanceChart;
