import { PageHeader } from "@ant-design/pro-components";
import { Breadcrumb, Select, Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import React from "react";

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
const breadcrumbItems = [
  { title: <Link to="/home">Trang chủ</Link> },
  { title: <Link to="/machine">Giám sát hiệu suất</Link> },
  { title: "Dashboard máy" },
];

const MachineDashboardHeader: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <PageHeader
      className="site-page-header"
      title="Dashboard Máy"
      breadcrumb={<Breadcrumb items={breadcrumbItems} />}
    >
      <Row gutter={16}>
        <Col>
          <Button type="primary" ghost size="small" style={{ marginRight: 8 }}>
            Sản phẩm
          </Button>
          <Select
            size="small"
            defaultValue="lucy"
            style={{ width: 180 }}
            onChange={handleChange}
            options={options}
          />
        </Col>
        <Col>
          <Button type="primary" ghost size="small" style={{ marginRight: 8 }}>
            Lệnh sản xuất
          </Button>
          <Select
            size="small"
            defaultValue="lucy"
            style={{ width: 180 }}
            onChange={handleChange}
            options={optionsLine}
          />
        </Col>
        <Col>
          <Button type="primary" ghost size="small" style={{ marginRight: 8 }}>
            Ca làm
          </Button>
          <Select
            size="small"
            defaultValue="lucy"
            style={{ width: 180 }}
            onChange={handleChange}
            options={optionsCL}
          />
        </Col>
        <Col>
          <Button type="primary" ghost size="small" style={{ marginRight: 8 }}>
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
    </PageHeader>
  );
};

export default MachineDashboardHeader;
