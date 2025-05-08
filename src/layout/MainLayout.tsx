import {
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Button, Layout, theme, Avatar, Badge, Image, Drawer} from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo_full.png";
import SideMenu from "../components/SideMenu";

const { Header, Content } = Layout;


const MainLayout: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Drawer
        title={
          <Image
          src={logo}
          preview={false}
          width={120}
          alt="Logo"
          className=""
        />
        }
        placement="left"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ body: { paddingLeft: 10, paddingRight: 0 } }}
        footer={<Button icon={<LogoutOutlined />} type="text">Đăng xuất</Button>}
      >
        <SideMenu/>
      </Drawer>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            height: 48,
            position: "sticky",
            top: 0,
            zIndex: 1000,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={<MenuUnfoldOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{
                fontSize: "16px",
                width: 40,
                height: 40,
                color: "white",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginRight: "16px",
            }}
          >
            <SearchOutlined
              style={{
                fontSize: "18px",
                height: "16px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <QuestionCircleOutlined
              style={{
                fontSize: "18px",
                height: "16px",
                color: "white",
                cursor: "pointer",
              }}
            />
            <Badge count={5} size="small">
              <BellOutlined
                style={{ fontSize: "16px", color: "white", cursor: "pointer" }}
              />
            </Badge>
            <div className="">
              <Avatar size="large" icon={<UserOutlined />} />
              {/* <p className="text-white">Nguyễn Việt Hiếu</p> */}
            </div>
          </div>
        </Header>
        <Content
          style={{
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
