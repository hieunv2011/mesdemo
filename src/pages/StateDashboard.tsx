import React, {useState} from "react";
import StateDashboardHeader from "../components/StateDashboard/StateDashboardHeader";
import { Col, Row, Select, Table } from "antd";
import machineImage from "../assets/machine.jpg";
import StateLineChart from "../components/StateDashboard/StateLineChart";
import StateTimelineChart from "../components/StateDashboard/StateTimeLineChart";
const options = [
  { value: "jack", label: "KV_CL_01" },
  { value: "lucy", label: "KV_CL_02" },
  { value: "Yiminghe", label: "KV_CL_03" },
];
const data = [
  {
    key: "1",
    stt: 1,
    maLoi: "E001",
    loaiLoi: "Lỗi hệ thống",
    thoiGianBatDau: "2025-04-01 08:00",
    thoiGianKetThuc: "2025-04-01 09:00",
  },
  {
    key: "2",
    stt: 2,
    maLoi: "E002",
    loaiLoi: "Lỗi kết nối",
    thoiGianBatDau: "2025-04-01 10:00",
    thoiGianKetThuc: "2025-04-01 11:00",
  },
  {
    key: "3",
    stt: 3,
    maLoi: "E003",
    loaiLoi: "Lỗi phần mềm",
    thoiGianBatDau: "2025-04-01 12:00",
    thoiGianKetThuc: "2025-04-01 13:00",
  },
  {
    key: "4",
    stt: 4,
    maLoi: "E004",
    loaiLoi: "Lỗi phần cứng",
    thoiGianBatDau: "2025-04-01 14:00",
    thoiGianKetThuc: "2025-04-01 15:00",
  },
  {
    key: "5",
    stt: 5,
    maLoi: "E005",
    loaiLoi: "Lỗi kết nối mạng",
    thoiGianBatDau: "2025-04-01 16:00",
    thoiGianKetThuc: "2025-04-01 17:00",
  },
  {
    key: "6",
    stt: 6,
    maLoi: "E006",
    loaiLoi: "Lỗi hệ thống",
    thoiGianBatDau: "2025-04-01 18:00",
    thoiGianKetThuc: "2025-04-01 19:00",
  },
  {
    key: "7",
    stt: 7,
    maLoi: "E007",
    loaiLoi: "Lỗi phần mềm",
    thoiGianBatDau: "2025-04-01 20:00",
    thoiGianKetThuc: "2025-04-01 21:00",
  },
  {
    key: "8",
    stt: 8,
    maLoi: "E008",
    loaiLoi: "Lỗi phần cứng",
    thoiGianBatDau: "2025-04-01 22:00",
    thoiGianKetThuc: "2025-04-01 23:00",
  },
  {
    key: "9",
    stt: 9,
    maLoi: "E009",
    loaiLoi: "Lỗi kết nối",
    thoiGianBatDau: "2025-04-02 00:00",
    thoiGianKetThuc: "2025-04-02 01:00",
  },
  {
    key: "10",
    stt: 10,
    maLoi: "E010",
    loaiLoi: "Lỗi hệ thống",
    thoiGianBatDau: "2025-04-02 02:00",
    thoiGianKetThuc: "2025-04-02 03:00",
  },
  {
    key: "11",
    stt: 11,
    maLoi: "E011",
    loaiLoi: "Lỗi phần mềm",
    thoiGianBatDau: "2025-04-02 04:00",
    thoiGianKetThuc: "2025-04-02 05:00",
  },
  {
    key: "12",
    stt: 12,
    maLoi: "E012",
    loaiLoi: "Lỗi kết nối mạng",
    thoiGianBatDau: "2025-04-02 06:00",
    thoiGianKetThuc: "2025-04-02 07:00",
  },
];

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Mã lỗi",
    dataIndex: "maLoi",
    key: "maLoi",
  },
  {
    title: "Loại lỗi",
    dataIndex: "loaiLoi",
    key: "loaiLoi",
  },
  {
    title: "Thời gian bắt đầu",
    dataIndex: "thoiGianBatDau",
    key: "thoiGianBatDau",
  },
  {
    title: "Thời gian kết thúc",
    dataIndex: "thoiGianKetThuc",
    key: "thoiGianKetThuc",
  },
];
const StateDashboard = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [currentPage, setCurrentPage] = useState(1);

  // Hàm xử lý thay đổi trang
  const onChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <StateDashboardHeader />
      <div className="p-4 bg-[#F0F2F5] flex flex-col space-y-4">
        <StateTimelineChart />
        <StateLineChart />
        <Row gutter={16} className="bg-white p-4">
          <Col span={4}>
            <div className="shadow-md overflow-hidden bg-white h-[260px] mb-2">
              <div className="text-center py-2 font-semibold">DISCONNECT</div>
              <img
                src={machineImage}
                alt="Machine"
                className="w-full block h-full"
              />
            </div>
            <Select
              className="w-full"
              defaultValue="lucy"
              onChange={handleChange}
              options={options}
            />
          </Col>
          <Col span={20}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{
                current: currentPage,
                pageSize: 5,
                total: data.length,
                onChange: onChange,
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StateDashboard;
