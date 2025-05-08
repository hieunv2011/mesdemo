import { PageHeader } from "@ant-design/pro-components";
import { Breadcrumb, Select, Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const breadcrumbItems = [
  { title: <Link to="/home">Trang chủ</Link> },
  { title: <Link to="/report">Báo cáo</Link> },
];
const options = [
  { value: "jack", label: "KV_CL_01" },
  { value: "lucy", label: "KV_CL_02" },
  { value: "Yiminghe", label: "KV_CL_03" },
];
const ReportDashboardHeader: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <PageHeader
      className="site-page-header"
      title="Giám sát trạng thái"
      breadcrumb={<Breadcrumb items={breadcrumbItems} />}
    >
      <Row gutter={16}>
        <Col>
          <Button type="primary" ghost size="small" style={{ marginRight: 8 }}>
            Máy
          </Button>
          <Select
            size="small"
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={options}
          />
        </Col>
      </Row>
    </PageHeader>
  );
};

export default ReportDashboardHeader;
