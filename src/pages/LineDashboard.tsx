import LineDashboardHeader from "../components/LineDashboard/LineDashboardHeader";
import { Row, Col } from "antd";
import LineCircleChart from "../components/LineDashboard/LineCircleChart";
import LineColumnChart from "../components/LineDashboard/LineColumnChart";

type MachineState = "running" | "error" | "stopped";

const stateColors: Record<MachineState, string> = {
  running: "#52c41a",
  error: "#faad14",
  stopped: "#cf1322",
};

const machineData: {
  lineName: string;
  machines: {
    name: string;
    time: string;
    state: MachineState;
    circleChartData: { active: number; maintenance: number };
    columnChartData: number[];
  }[];
}[] = [
  {
    lineName: "Line 01",
    machines: [
      {
        name: "ANCA Grinder",
        time: "34m-Indle",
        state: "running",
        circleChartData: { active: 210, maintenance: 60 },
        columnChartData: [1, 3, 4, 8, 9, 1],
      },
      {
        name: "CNC Lathe",
        time: "12m-Indle",
        state: "error",
        circleChartData: { active: 180, maintenance: 90 },
        columnChartData: [2, 5, 7, 3, 6, 2],
      },
      {
        name: "Drill Machine",
        time: "15m-Indle",
        state: "stopped",
        circleChartData: { active: 140, maintenance: 120 },
        columnChartData: [5, 6, 4, 7, 8, 3],
      },
      {
        name: "Milling Machine",
        time: "20m-Indle",
        state: "running",
        circleChartData: { active: 250, maintenance: 50 },
        columnChartData: [4, 7, 5, 6, 3, 8],
      },
    ],
  },
  {
    lineName: "Line 02",
    machines: [
      {
        name: "Milling Machine",
        time: "25m-Indle",
        state: "stopped",
        circleChartData: { active: 150, maintenance: 100 },
        columnChartData: [4, 6, 2, 5, 7, 3],
      },
      {
        name: "Laser Cutter",
        time: "40m-Indle",
        state: "running",
        circleChartData: { active: 220, maintenance: 40 },
        columnChartData: [3, 7, 5, 9, 4, 2],
      },
      {
        name: "Water Jet Cutter",
        time: "30m-Indle",
        state: "error",
        circleChartData: { active: 130, maintenance: 140 },
        columnChartData: [5, 8, 6, 4, 3, 7],
      },
      {
        name: "Laser Engraver",
        time: "10m-Indle",
        state: "running",
        circleChartData: { active: 210, maintenance: 60 },
        columnChartData: [6, 3, 7, 8, 4, 6],
      },
    ],
  },
];

const LineDashboard = () => {
  return (
    <div>
      <LineDashboardHeader />
      <div className="p-4 bg-[#F0F2F5]">
        {machineData.map((line) => (
          <div key={line.lineName}>
            <h2 className="text-lg font-semibold mb-2">{line.lineName}</h2>
            <Row gutter={16}>
              {line.machines.map((machine) => (
                <Col span={4} key={machine.name}>
                  <div
                    className="p-2 rounded-lg m-1"
                    style={{
                      backgroundColor: stateColors[machine.state],
                      color: "#fff",
                    }}
                  >
                    <div className="flex justify-between items-center p-2">
                      <h3 className="text-lg">{machine.name}</h3>
                      <span className="text-sm">{machine.time}</span>
                    </div>
                    <div className="h-[1px] bg-[#f1f2f6] mx-2"></div>
                    <LineCircleChart data={machine.circleChartData} />
                    <LineColumnChart data={machine.columnChartData} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineDashboard;
