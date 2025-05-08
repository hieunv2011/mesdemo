import MachineDashboardHeader from "../components/MachineDashboard/MachineDashboardHeader";
import { Col, Row, Select, Table } from "antd";
import machineImage from "../assets/machine.jpg";
import GaugeChart from "../components/MachineDashboard/GaugeChart";
import MttfChart from "../components/MachineDashboard/MttfChart";
import MtbfChart from "../components/MachineDashboard/MtbfChart";
import AvaibilityChart from "../components/MachineDashboard/AvaibilityChart";
import PerformanceChart from "../components/MachineDashboard/PerformanceChart";
import QualityChart from "../components/MachineDashboard/QualityChart";
const options = [
  { value: "jack", label: "KV_CL_01" },
  { value: "lucy", label: "KV_CL_02" },
  { value: "Yiminghe", label: "KV_CL_03" },
];
const columns = [
  { title: "Tên sản phẩm", dataIndex: "ten_san_pham", key: "ten_san_pham" },
  { title: "Lệnh sản xuất", dataIndex: "lenh_san_xuat", key: "lenh_san_xuat" },
  {
    title: "Người thực hiện",
    dataIndex: "nguoi_thuc_hien",
    key: "nguoi_thuc_hien",
  },
  { title: "Ca làm việc", dataIndex: "ca_lam_viec", key: "ca_lam_viec" },
  { title: "Sản phẩm đạt", dataIndex: "san_pham_dat", key: "san_pham_dat" },
  { title: "Sản phẩm lỗi", dataIndex: "san_pham_loi", key: "san_pham_loi" },
  {
    title: "Thời gian dự kiến",
    dataIndex: "thoi_gian_du_kien",
    key: "thoi_gian_du_kien",
  },
  {
    title: "Thời gian máy chạy",
    dataIndex: "thoi_gian_may_chay",
    key: "thoi_gian_may_chay",
  },
  {
    title: "Thời gian máy dừng",
    dataIndex: "thoi_gian_may_dung",
    key: "thoi_gian_may_dung",
  },
  {
    title: "Thời gian kết thúc",
    dataIndex: "thoi_gian_ket_thuc",
    key: "thoi_gian_ket_thuc",
  },
];

const tableData = Array.from({ length: 58 }, (_, index) => ({
  key: index,
  ten_san_pham: "ABCDXYZ",
  lenh_san_xuat: 10,
  nguoi_thuc_hien: "Nguyễn Việt Hiếu",
  ca_lam_viec: "",
  san_pham_dat: 0,
  san_pham_loi: 10,
  thoi_gian_du_kien: "Máy in",
  thoi_gian_may_chay: "10:32 28/02/2025",
  thoi_gian_may_dung: "10:32 28/02/2025",
  thoi_gian_ket_thuc: "10:32 28/02/2025",
}));
const MachineDashboard = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <MachineDashboardHeader />
      <div className="p-4 bg-[#F0F2F5] h-fit">
        <Row gutter={16}>
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
            <div style={{ height: 300 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <GaugeChart />
                </Col>
                <Col span={18}>
                  <Row gutter={8}>
                    <Col span={8} style={{ height: 300 }}>
                      <div className="bg-white">
                        {/* <AvaibilityChart /> */}
                        <PerformanceChart/>
                      </div>
                    </Col>
                    <Col span={8} style={{ height: 300 }}>
                      <div className="bg-white">
                        {/* <PerformanceChart/> */}
                        <AvaibilityChart />
                      </div>
                    </Col>
                    <Col span={8} style={{ height: 300 }}>
                      <div className="bg-white">
                        <QualityChart/>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="bg-white mt-4">
          <Col span={4} className="p-4">
            <MttfChart />
            <MtbfChart/>
          </Col>
          <Col span={20}>
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={{ pageSize: 10 }}
              className="p-4"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MachineDashboard;
