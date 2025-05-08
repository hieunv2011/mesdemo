import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/highcharts-3d";
import { getAllMachines } from "../../services/machineService";

// Định nghĩa kiểu dữ liệu cho máy móc
type Machine = {
  id: string;
  name: string;
  state: "operating" | "maintenance" | "error"; // Các trạng thái của máy
};

const Demo: React.FC = () => {
  const [total, setTotal] = useState(0);
  const [operating, setOperating] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [error, setError] = useState(0);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        // Gọi API để lấy danh sách máy móc
        const machines: Machine[] = await getAllMachines();
        console.log("Fetched machines:", machines); // Log danh sách máy móc

        // Tính toán số lượng máy theo trạng thái
        const total = machines.length;
        const operating = machines.filter((machine) => machine.state === "operating").length;
        const maintenance = machines.filter((machine) => machine.state === "maintenance").length;
        const error = machines.filter((machine) => machine.state === "error").length;

        // Cập nhật state
        setTotal(total);
        setOperating(operating);
        setMaintenance(maintenance);
        setError(error);
      } catch (error) {
        console.error("Error fetching machines:", error);
      }
    };

    fetchMachines();
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
      height: 280,
    },
    credits: { enabled: false },
    title: {
      text: "Tổng số máy",
    },
    subtitle: {
      text: `${total}`, // Hiển thị tổng số máy
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
        size: "120%",
        depth: 35,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Share",
        data: [
          { name: `Hoạt động: ${operating}`, y: operating, color: "#28a745" },
          { name: `Đang bảo trì: ${maintenance}`, y: maintenance, color: "#ffc107" },
          {
            name: `Gặp sự cố: ${error}`,
            y: error,
            sliced: true,
            selected: true,
            color: "#dc3545",
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Demo;
