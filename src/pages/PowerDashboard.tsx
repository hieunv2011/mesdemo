import PowerDashboardHeader from "../components/PowerDashboard/PowerDashboradHeader";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Alert, Card, Col, Row, Statistic, Button, Select } from "antd";
import machineImage from "../assets/machine.jpg";
import Uchart from "../components/PowerDashboard/Uchart";
import Ichart from "../components/PowerDashboard/Ichart";
import KwhChart from "../components/PowerDashboard/KwhChart";
import KwChart from "../components/PowerDashboard/KwChart";
const options = [
  { value: "jack", label: "KV_CL_01" },
  { value: "lucy", label: "Bu lông M12" },
  { value: "Yiminghe", label: "KV_CL_03" },
];
const optionsLine = [
  { value: "jack", label: "LINE 01" },
  { value: "lucy", label: "LSX-N3-X10-L12" },
  { value: "Yiminghe", label: "LINE 03" },
];
const optionsCL = [
  { value: "jack", label: "CL01" },
  { value: "lucy", label: "CL02" },
  { value: "Yiminghe", label: "CL03" },
];
const optionsNV = [
  { value: "jack", label: "Nguyễn Tuấn Anh" },
  { value: "lucy", label: "Lê Chí Tuyền" },
  { value: "Yiminghe", label: "Nguyễn Việt Hiếu" },
];

const PowerDashboard = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <PowerDashboardHeader />
      <div className="p-4 bg-[#F0F2F5] h-fit">
        <div>
          <Row gutter={8}>
            <Col
              span={4}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#389e0d",
                  color: "white",
                  textAlign: "center",
                  height: "180px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "MtbfChart",
                    width: "100%",
                    padding: "8px",
                    borderBottom: "1px solid white",
                  }}
                >
                  Tổng năng lượng tiêu thụ
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "MtbfChart",
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  75.900.900 KWH
                </div>
              </div>
              <Alert
                message="Máy tiêu thụ điện nhiều nhất"
                type="warning"
                showIcon
              />
              <Card variant="borderless" style={{ backgroundColor: "#5c0011" }}>
                <Statistic
                  title={<span style={{ color: "white" }}>M-001</span>}
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "white" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
              <Card variant="borderless" style={{ backgroundColor: "#820014" }}>
                <Statistic
                  title={<span style={{ color: "white" }}>M-001</span>}
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "white" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
              <Card variant="borderless" style={{ backgroundColor: "#a8071a" }}>
                <Statistic
                  title={<span style={{ color: "white" }}>M-001</span>}
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "white" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
              <Card variant="borderless" style={{ backgroundColor: "#cf1322" }}>
                <Statistic
                  title={<span style={{ color: "white" }}>M-001</span>}
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "white" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
              <Card variant="borderless" style={{ backgroundColor: "#f5222d" }}>
                <Statistic
                  title={<span style={{ color: "white" }}>M-001</span>}
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "white" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={20} className="flex space-y-4">
              <div>
                <div className="bg-white p-4">
                  <Row gutter={16}>
                    <Col>
                      <Button
                        type="primary"
                        ghost
                        size="small"
                        style={{ marginRight: 8 }}
                      >
                        Sản phẩm
                      </Button>
                      <Select
                        size="small"
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={options}
                      />
                    </Col>
                    <Col>
                      <Button
                        type="primary"
                        ghost
                        size="small"
                        style={{ marginRight: 8 }}
                      >
                        Lệnh sản xuất
                      </Button>
                      <Select
                        size="small"
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={optionsLine}
                      />
                    </Col>
                    <Col>
                      <Button
                        type="primary"
                        ghost
                        size="small"
                        style={{ marginRight: 8 }}
                      >
                        Ca làm
                      </Button>
                      <Select
                        size="small"
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={optionsCL}
                      />
                    </Col>
                    <Col>
                      <Button
                        type="primary"
                        ghost
                        size="small"
                        style={{ marginRight: 8 }}
                      >
                        Nhân viên
                      </Button>
                      <Select
                        size="small"
                        defaultValue="lucy"
                        style={{ width: 200 }}
                        onChange={handleChange}
                        options={optionsNV}
                      />
                    </Col>
                  </Row>
                </div>
                <Row gutter={8}>
                  <Col span={4}>
                    <div className="shadow-md overflow-hidden bg-white h-[260px] mb-2">
                      <div className="text-center py-2 font-semibold">
                        DISCONNECT
                      </div>
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
                  <Col span={10}>
                    <Uchart />
                  </Col>
                  <Col span={10}>
                    <Ichart />
                  </Col>
                </Row>
                <div className="mt-4 flex flex-col space-y-4">
                  <KwhChart />
                  <KwChart />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default PowerDashboard;
