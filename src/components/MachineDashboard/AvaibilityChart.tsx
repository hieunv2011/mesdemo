import React, {useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/highcharts-3d";
import { useAtom } from "jotai";
import { websocketDataAtom } from "../../stores/websocketStore";
import { connectWebSocket, disconnectWebSocket } from "../../utils/ws";
const AvailabilityChart: React.FC = () => {
  // Lấy dữ liệu từ websocketDataAtom
  const [websocketData] = useAtom(websocketDataAtom);
    useEffect(() => {
      const handleMessage = (message: any) => {
        console.log("Received message:", message);
        // Xử lý dữ liệu WebSocket tại đây
      };

      connectWebSocket("M01", handleMessage);

      return () => {
        disconnectWebSocket();
      };
    }, []);
  // console.log(websocketData, "websocketData");
  // Sử dụng dữ liệu từ WebSocket hoặc giá trị mặc định nếu chưa có
  const availability = websocketData?.availability || 0; // Giá trị mặc định là 0
  const plannedTime = websocketData?.planned_time || 0; // Giá trị mặc định là 0
  const runningTime = websocketData?.running_time || 0; // Giá trị mặc định là 0
  const stoppedTime = websocketData?.stopped_time || 0; // Giá trị mặc định là 0

  // Tính toán phần trăm
  const availabilityPercent = +(availability * 100).toFixed(1);
  const maintenancePercent = +(100 - availabilityPercent).toFixed(1);

  // Cấu hình biểu đồ
  const options: Highcharts.Options = {
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
      text: `${availabilityPercent}%`,
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
            name: `Thời gian chạy: ${runningTime} phút`,
            y: availabilityPercent,
            color: "#28a745",
          },
          {
            name: `Thời gian dừng: ${stoppedTime} phút`,
            y: maintenancePercent,
            color: "#ffc107",
          },
        ],
      },
    ],
  };

  // Dữ liệu hiển thị
  const data = [
    { status: "Dự kiến", time: `${plannedTime}` },
    { status: "Chạy", time: `${runningTime}` },
    { status: "Dừng", time: `${stoppedTime}` },
  ];

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="font-semibold text-center">KHẢ DỤNG (phút)</div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between border-b last:border-none py-1 mx-2"
        >
          <span className="w-full">{item.status}</span>
          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export default AvailabilityChart;
