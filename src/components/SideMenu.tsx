import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  SettingOutlined,
  AreaChartOutlined,
  ThunderboltOutlined,
  SnippetsOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/home",
    label: "Trang chủ",
    icon: <HomeOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: 'OEE',
    label: 'OEE',
    type: 'group',
  },
  {
    key: "sub1",
    label: "Giám sát hiệu suất",
    icon: <DashboardOutlined />,
    children: [
      {
        key: "g1",
        type: "group",
        children: [
          { key: "/machine", label: "Dashboard máy" },
          { key: "/line", label: "Danh sách máy" },
        ],
      },
    ],
  },
  {
    key: "state",
    label: "Giám sát trạng thái",
    icon: <AreaChartOutlined />,
  },
  {
    key: "power",
    label: "Giám sát điện năng",
    icon: <ThunderboltOutlined />,
  },
  {
    key: "report",
    label: "Báo cáo",
    icon: <SnippetsOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "grp",
    label: "Cài đặt",
    icon: <SettingOutlined />,
    children: [
      { key: "13", label: "Sản phẩm" },
      { key: "14", label: "Mã lỗi" },
      { key: "15", label: "Mã phế phẩm" },
      { key: "16", label: "Năng lực sản xuất" },
      { key: "17", label: "Ca làm việc" },
      { key: "18", label: "Thiết bị" },
      { key: "19", label: "Nhóm thiết bị" },
    ],
  },
  {
    key: "sub7",
    label: "Tài khoản",
    icon: <UserOutlined />,
  },
];

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      // style={{ width: 256 }}
      defaultSelectedKeys={["/home"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;
