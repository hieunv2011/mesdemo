import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getAllEnergyLogs } from "../../services/energyService";

const ColumnChart: React.FC = () => {
  const chartRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState({ width: 0 });
  const [monthlyData, setMonthlyData] = useState<number[]>(Array(12).fill(0));

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setChartSize({ width: containerRef.current.clientWidth });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.setSize(chartSize.width, undefined, false);
    }
  }, [chartSize]);

  useEffect(() => {
    const fetchEnergyLogs = async () => {
      try {
        const data = await getAllEnergyLogs();
        const sortedData = data.sort(
          (a: { timestamp: string }, b: { timestamp: string }) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );

        const monthlyGroups: { [key: number]: { first: number | null; last: number | null } } = {};

        sortedData.forEach((log: { kwh: number; timestamp: string }) => {
          const date = new Date(log.timestamp);
          const month = date.getMonth();

          if (!monthlyGroups[month]) {
            monthlyGroups[month] = { first: log.kwh, last: log.kwh };
          } else {
            monthlyGroups[month].last = log.kwh;
          }
        });

        const monthlyConsumption = Array(12).fill(0);
        Object.keys(monthlyGroups).forEach((month) => {
          const { first, last } = monthlyGroups[parseInt(month)];
          if (first !== null && last !== null) {
            monthlyConsumption[parseInt(month)] = last - first;
          }
        });

        setMonthlyData(monthlyConsumption);
      } catch (error) {
        console.error("Error fetching energy logs:", error);
      }
    };

    fetchEnergyLogs();
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Lượng điện tiêu thụ (KWh)",
    },
    xAxis: {
      categories: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
    },
    credits: { enabled: false },
    yAxis: {
      title: {
        text: "KWh",
      },
    },
    series: [
      {
        name: "Hiệu số điện tiêu thụ",
        type: "column",
        data: monthlyData,
      },
    ],
  };

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default ColumnChart;
