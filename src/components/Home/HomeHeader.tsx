import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { PageHeader } from "@ant-design/pro-components";
import React from "react";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    ),
  },
];

const DropdownMenu = () => (
  <Dropdown key="more" menu={{ items }} placement="bottomRight">
    <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
  </Dropdown>
);

const breadcrumbItems = [
  {
    key: "/home",
    title: "Trang chủ",
  },
];

const HomeHeader: React.FC = () => (
  <PageHeader
    title={
      <>
        Xin chào Nguyễn Việt Hiếu
        <div style={{ fontSize: 14, color: "gray" }}>
          Xưởng X-03, Nhà máy M-09, Công ty TNHH EcoMachine
        </div>
      </>
    }
    className=""
    extra={[
      <Button key="3">Operation</Button>,
      <Button key="2">Operation</Button>,
      <Button key="1" type="primary">
        Primary
      </Button>,
      <DropdownMenu key="more" />,
    ]}
    avatar={{
      src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
      style: { width: 52, height: 52 },
    }}
    breadcrumb={{ items: breadcrumbItems }}
  ></PageHeader>
);

export default HomeHeader;
