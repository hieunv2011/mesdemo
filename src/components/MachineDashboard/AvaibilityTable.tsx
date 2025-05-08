import { useState } from "react";
import useWebSocketHandler from "../../hooks/useWebSocketHandler";

const AvaibilityTable = () => {
  const [plannedTime, setPlannedTime] = useState(0);
  const [runningTime, setRunningTime] = useState(0);
  const [stoppedTime, setStoppedTime] = useState(0);

  useWebSocketHandler("factory/machine/M01/planned_time", (data: any) =>
    setPlannedTime(data.planned_time || 0)
  );
  useWebSocketHandler("factory/machine/M01/running_time", (data: any) =>
    setRunningTime(data.running_time || 0)
  );
  useWebSocketHandler("factory/machine/M01/stopped_time", (data: any) =>
    setStoppedTime(data.stopped_time || 0)
  );

  const data = [
    { status: "Dự kiến", time: `${plannedTime}` },
    { status: "Chạy", time: `${runningTime}` },
    { status: "Dừng", time: `${stoppedTime}` },
  ];

  return (
    <div className="bg-white">
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

export default AvaibilityTable;
