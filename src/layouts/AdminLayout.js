import React, { useState, useContext } from "react";
import { Button, Layout } from "antd";
import { LogoutOutlined, LoadingOutlined, MenuOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { BaseAPI } from "../utils/Api";
import { AppRootContext } from "../contexts/AppRootContext";

import SideBar from "../container/SideBar";
import Navbar from "../container/Navbar";

import AppRoutes from "../routes";

const { Header, Content, Footer } = Layout;

function AdminLayout() {
  const history = useHistory();
  const { setNavIsVisible } = useContext(AppRootContext);

  const [loading, setLoading] = useState(false);

  const logout = () => {
    setLoading(true);
    BaseAPI.get("/auth/logout", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then(() => {
        localStorage.clear();
        history.push("/login");
      })
      .catch(() => {
        localStorage.clear();
        history.push("/login");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <Navbar />
      <SideBar />
      <Layout>
        <Header className="site-layout-sub-header-background ">
          <Button className="menu" type="primary" icon={<MenuOutlined />} onClick={() => setNavIsVisible(true)} />
          <Button className="logout-btn" onClick={logout} danger icon={loading ? <LoadingOutlined /> : <LogoutOutlined />}>
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="site-layout-background" style={{ padding: "12px 24px", minHeight: 800 }}>
            <AppRoutes />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>E-commerce ©{new Date().getFullYear()} Created by NanoSoft</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
