import { PageHeader } from "@ant-design/pro-components";
import { Breadcrumb, Select, Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const breadcrumbItems = [
  { title: <Link to="/home">Trang chủ</Link> },
  { title: "Giám sát hiệu suất máy"},
  { title: <Link to="/line">Danh sách máy</Link> },
];

const LineDashboardHeader: React.FC = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Danh sách máy"
      breadcrumb={<Breadcrumb items={breadcrumbItems} />}
    ></PageHeader>
  );
};

export default LineDashboardHeader;
