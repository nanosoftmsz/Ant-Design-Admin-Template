import React from "react";
import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import '../styles/Sidebar.less'

const { Sider } = Layout;

function SideBar() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="sidebar"
      >
      <div className="logo">E-Commerce</div>
      <Menu  mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav s
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
