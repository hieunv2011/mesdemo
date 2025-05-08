import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import { Col, Row, Card, DatePicker, Select } from "antd";
import GaugeChart from "../components/Home/GaugeChart";
import Demo from "../components/Home/Demo";
import HomeList from "../components/Home/HomeList";
import ColumnChart from "../components/Home/CloumnChart";
import EnergyList from "../components/Home/EnergyList";
const style: React.CSSProperties = {
  padding: "8px 0",
  height: 320,
  backgroundColor: "white",
};
//Date
const { RangePicker } = DatePicker;
//select
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="p-4 bg-[#F0F2F5] h-fit">
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <Card style={style}>
              <GaugeChart />
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card style={style}>
              <Demo />
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <Card style={style} className="overflow-auto">
              <HomeList />
            </Card>
          </Col>
        </Row>
        <Card
          title={<p>Tổng năng lượng tiêu thụ (KWh)</p>}
          extra={
            <div className="">
              <Select
                variant="borderless"
                defaultValue="Theo ngày"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "week", label: "Theo tuần" },
                  { value: "month", label: "Theo tháng" },
                  { value: "year", label: "Theo năm" },
                  { value: "alltimes", label: "Tất cả" },
                ]}
              />
              <RangePicker
                placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                style={{ marginLeft: 16 }}
              />
            </div>
          }
          style={{ marginTop: 16 }}
        >
          <Row>
            <Col span={20}>
              <ColumnChart />
            </Col>
            <Col span={4}>
              <EnergyList/>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Home;
