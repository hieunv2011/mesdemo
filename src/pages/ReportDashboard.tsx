import { useState } from "react";
import ReportDashboardHeader from "../components/ReportDashboard/ReportDashboardHeader";
import { Table, Button } from "antd";
import * as XLSX from "xlsx";
import { RedoOutlined, DownloadOutlined } from "@ant-design/icons";
import ReportChart from "../components/ReportDashboard/ReportChart";
const dataOutputAndError = [
  {
    key: "1",
    ngay: "2025-04-01",
    tenMay: "Máy A",
    dauRaThucTe: 120,
    mucTieu: 100,
    ng: 5,
    tiLeLoi: "4.17%",
  },
  {
    key: "2",
    ngay: "2025-04-01",
    tenMay: "Máy B",
    dauRaThucTe: 150,
    mucTieu: 160,
    ng: 10,
    tiLeLoi: "6.25%",
  },
  {
    key: "3",
    ngay: "2025-04-01",
    tenMay: "Máy C",
    dauRaThucTe: 95,
    mucTieu: 100,
    ng: 2,
    tiLeLoi: "2.11%",
  },
  {
    key: "4",
    ngay: "2025-04-02",
    tenMay: "Máy A",
    dauRaThucTe: 110,
    mucTieu: 100,
    ng: 0,
    tiLeLoi: "0.00%",
  },
  {
    key: "5",
    ngay: "2025-04-02",
    tenMay: "Máy B",
    dauRaThucTe: 160,
    mucTieu: 160,
    ng: 1,
    tiLeLoi: "0.62%",
  },
  {
    key: "6",
    ngay: "2025-04-02",
    tenMay: "Máy C",
    dauRaThucTe: 120,
    mucTieu: 100,
    ng: 8,
    tiLeLoi: "6.67%",
  },
  {
    key: "7",
    ngay: "2025-04-03",
    tenMay: "Máy A",
    dauRaThucTe: 95,
    mucTieu: 100,
    ng: 3,
    tiLeLoi: "3.16%",
  },
  {
    key: "8",
    ngay: "2025-04-03",
    tenMay: "Máy B",
    dauRaThucTe: 140,
    mucTieu: 160,
    ng: 12,
    tiLeLoi: "8.57%",
  },
  {
    key: "9",
    ngay: "2025-04-03",
    tenMay: "Máy C",
    dauRaThucTe: 130,
    mucTieu: 100,
    ng: 6,
    tiLeLoi: "4.62%",
  },
  {
    key: "10",
    ngay: "2025-04-04",
    tenMay: "Máy A",
    dauRaThucTe: 105,
    mucTieu: 100,
    ng: 2,
    tiLeLoi: "1.90%",
  },
  {
    key: "11",
    ngay: "2025-04-04",
    tenMay: "Máy B",
    dauRaThucTe: 125,
    mucTieu: 130,
    ng: 4,
    tiLeLoi: "3.20%",
  },
  {
    key: "12",
    ngay: "2025-04-04",
    tenMay: "Máy C",
    dauRaThucTe: 100,
    mucTieu: 100,
    ng: 0,
    tiLeLoi: "0.00%",
  },
];

const columnsOutputAndError = [
  {
    title: "Ngày",
    dataIndex: "ngay",
    key: "ngay",
  },
  {
    title: "Tên máy",
    dataIndex: "tenMay",
    key: "tenMay",
  },
  {
    title: "Đầu ra thực tế",
    dataIndex: "dauRaThucTe",
    key: "dauRaThucTe",
  },
  {
    title: "Mục tiêu",
    dataIndex: "mucTieu",
    key: "mucTieu",
  },
  {
    title: "NG",
    dataIndex: "ng",
    key: "ng",
  },
  {
    title: "Tỉ lệ lỗi",
    dataIndex: "tiLeLoi",
    key: "tiLeLoi",
  },
];

const ReportDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(dataOutputAndError);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bảng Lỗi");
    XLSX.writeFile(wb, "du_lieu_loi.xlsx");
  };

  return (
    <div>
      <ReportDashboardHeader />
      <div className="p-4 bg-[#F0F2F5] flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">
            Bảng tỉ lệ đầu ra và lỗi
          </span>
          <div className="flex space-x-4">
            <Button
              type="primary"
              onClick={exportToExcel}
              icon={<DownloadOutlined />}
            >
              Tải về
            </Button>
            <Button
              type="default"
              onClick={() => console.log("Làm mới")}
              icon={<RedoOutlined />}
            >
              Làm mới
            </Button>
          </div>
        </div>
        <Table
          columns={columnsOutputAndError}
          dataSource={dataOutputAndError}
          pagination={{
            current: currentPage,
            pageSize: 5,
            total: dataOutputAndError.length,
            onChange: onChange,
          }}
        />
        {/* <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">
            Biểu đồ tỉ lệ đầu ra và lỗi
          </span>
          <div className="flex space-x-4">
            <Button
              type="primary"
              onClick={exportToExcel}
              icon={<DownloadOutlined />}
            >
              Tải về
            </Button>
            <Button
              type="default"
              onClick={() => console.log("Làm mới")}
              icon={<RedoOutlined />}
            >
              Làm mới
            </Button>
          </div>
        </div> */}
        <ReportChart/>
      </div>
    </div>
  );
};

export default ReportDashboard;
