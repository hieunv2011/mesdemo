import { PageHeader } from "@ant-design/pro-components";
import { Breadcrumb} from "antd";
import { Link } from "react-router-dom";
import React from "react";

const breadcrumbItems = [
  { title: <Link to="/home">Trang chủ</Link> },
  { title: <Link to="/power">Giám sát điện năng</Link> },
];

const PowerDashboardHeader: React.FC = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Giám sát điện năng"
      breadcrumb={<Breadcrumb items={breadcrumbItems} />}
    ></PageHeader>
  );
};

export default PowerDashboardHeader;
