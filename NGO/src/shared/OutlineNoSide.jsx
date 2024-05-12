import { useState, createElement } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Badge } from "antd"; // Import Badge from 'antd'
import PopOver from "./components/PopOver";
import Logo from "./assets/Logo-Image-White-NoBackGround.png";
import * as FaIcons from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Changepassword from "../Admin/Changepassword";
import { blueGrey } from "@mui/material/colors";

const { Header, Content, Footer, Sider } = Layout;

const OutlineNoSide = ({ items, navBarItems }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const backgroundColor = "#1A0235";

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
    <Layout>
      <Layout
        style={{
          marginLeft: collapsed ? "0px" : "0px",
          transition: "margin-left 0.2s",
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1000",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            background: "linear-gradient(to right, #9B1B59, #6b2d98)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "85px",
                height: "85px",
                padding: "16px",
                margin: "0 auto",
                filter: "invert(100%)",
              }}
            />
            <h2 className="text-4xl mb-3 flex items-center text-white">
              BrightHorizon
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Button
              className={
                "mx-2 px-4 py-2 rounded-md focus:outline-none bg-indigo-600 text-white text-center "
              }
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <PopOver
              logo={
                <UserOutlined
                  style={{
                    fontSize: "16px",
                    cursor: "pointer",
                    filter: "invert(100%)",
                  }}
                />
              }
              content={profileContent}
              placement="bottomLeft"
              trigger="click"
            />
          </div>
        </Header>

        <Content style={{ overflow: "initial" }}>
          <Outlet style={{}} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default OutlineNoSide;
