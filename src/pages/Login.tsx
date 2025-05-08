import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Divider, theme, Modal, Input } from "antd";
import { useNavigate } from "react-router-dom";

import logo from "../../src/assets/logo.png";
const Login = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo={logo}
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="ECOMES"
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0,0.65)",
          backdropFilter: "blur(4px)",
        }}
        submitter={{
          searchConfig: {
            submitText: "Đăng nhập", // Đặt lại chữ trên nút
          },
        }}
        onFinish={async (values) => {
          console.log("Đăng nhập thành công:", values);
          navigate("/home");
        }}
        subTitle="Giám sát hiệu suất thiết bị tổng thể"
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 32,
            }}
          >
            <Divider plain>
              <span
                style={{
                  color: token.colorTextPlaceholder,
                  fontWeight: "normal",
                  fontSize: 14,
                }}
              >
                Copyright ©2025 Produced by EcoTel Co.,Ltdt
              </span>
            </Divider>
          </div>
        }
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: (
                <UserOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className={"prefixIcon"}
                />
              ),
            }}
            placeholder={"Nhập tên đăng nhập..."}
            // rules={[
            //   {
            //     required: true,
            //     message: "Vui lòng nhập tên đăng nhập!",
            //   },
            // ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: (
                <LockOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className={"prefixIcon"}
                />
              ),
            }}
            placeholder={"Nhập mật khẩu..."}
            // rules={[
            //   {
            //     required: true,
            //     message: "Vui lòng nhập mật khẩu!",
            //   },
            // ]}
          />
        </>
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            Ghi nhớ đăng nhập
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
            onClick={() => {
              Modal.confirm({
                title: "Yêu cầu cấp lại mật khẩu",
                centered: true,
                bodyStyle: { padding: "12px" },
                content: (
                  <Input
                    placeholder="Nhập email của bạn..."
                    size="large"
                    prefix={<MailOutlined />}
                  />
                ),
                okText: "Gửi yêu cầu cấp lại mật khẩu",
                footer: (_, { OkBtn }) => (
                  <>
                    <OkBtn />
                  </>
                ),
              });
            }}
          >
            Yêu cầu cấp lại mật khẩu
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <Login />
    </ProConfigProvider>
  );
};
