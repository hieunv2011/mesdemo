import React from "react";

interface LineColumnChartProps {
  data: number[];
}

const LineColumnChart: React.FC<LineColumnChartProps> = ({ data }) => {
  return (
    <div>
      {/* Render biểu đồ dựa trên data */}
      <p>Data: {data.join(", ")}</p>
    </div>
  );
};

export default LineColumnChart;
