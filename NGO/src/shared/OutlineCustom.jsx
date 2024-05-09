import { useState, createElement } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import PopOver from "./components/PopOver";
import Logo from "./assets/logo.jpg";

//import CustomFooter from "./Components/Footer";
//import NotificationList from "./Components/NotificationList";
//import MessagesList from "./Components/MessagesList";
import { Badge } from "@mui/joy";
import { dark } from "@mui/material/styles/createPalette";
const { Header, Content, Footer, Sider } = Layout;

const Outline = ({
  items,
  navBarItems,
  donationCategory,
  setDonationCategory,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const backgroundColor = "#1A0235  ";

  const handleDonationCategoryToggle = (item) => {
    setDonationCategory(item);
  };

  // Function to handle menu item click
  const onMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.to) {
      navigate(`${selectedItem.to}`);
    }
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    navigate("/");
  };
  const profileContent = (
    <div>
      {navBarItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          style={{ display: "block", margin: "10px 0" }}
        >
          {item.name}
        </Link>
      ))}
      {/* <div
        onClick={handleLogout}
        style={{ cursor: "pointer", margin: "10px 0" }}
      >
        Logout
      </div> */}
    </div>
  );

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        //theme="dark"
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: backgroundColor,
        }}
      >
        <div className="demo-logo-vertical">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "100px", padding: "16px", margin: "0 auto" }}
          />
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={items.map((item) => ({
            ...item,
            icon: createElement(item.icon.type),
          }))}
          onClick={onMenuClick}
          style={{ backgroundColor: backgroundColor, color: "red" }}
        />
      </Sider>

      <Layout
        style={{
          marginLeft: collapsed ? "80px" : "200px",
          transition: "margin-left 0.2s",
          // backgroundColor: "green",
          // height: '100%',
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1000",
            display: "flex",
            padding: "0 50px",
            background: colorBgContainer,
          }}
          className="flex justify-center items-center"
        >
          <div className="justify-left items-left">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "16px", border: "none" }}
              className="justify-left"
            />
          </div>
          <div
            //style={{ display: "flex", alignItems: "center", gap: "15px" }}
            className="flex flex-row justify-center"
          >
            <Badge badgeContent={6} showZero={false} size="sm">
              {navBarItems.map((item, index) => (
                <Button
                  type="text"
                  key={index}
                  onClick={() => handleDonationCategoryToggle(item.to)}
                  className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                    donationCategory === item.to
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  style={{
                    // Set button height to match the badge height
                    height: "3rem",
                    display: "inline-block",
                  }}
                >
                  {item.name}
                </Button>
              ))}

              <PopOver
                logo={
                  <BellOutlined
                    style={{
                      fontSize: "18px",
                      cursor: "pointer",
                      marginLeft: "20px",
                    }}
                  />
                }
                content="ok"
                placement="bottomLeft"
                trigger="click"
              />
            </Badge>

            <PopOver
              logo={
                <UserOutlined style={{ fontSize: "16px", cursor: "pointer" }} />
              }
              content={profileContent}
              placement="bottomLeft"
              trigger="click"
              className="items-center justify-center"
            />
          </div>
        </Header>

        <Content style={{ overflow: "initial" }}>
          <Outlet style={{}} />
        </Content>
        {/* <Footer style={{ width: '100%', textAlign: 'center' }}>
          <CustomFooter/>
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default Outline;
