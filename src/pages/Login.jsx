import React, { useState } from "react";
import { Form, Input, Button, Layout, Divider } from "antd";
import { KeyOutlined, LoadingOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";

import "../styles/Login.less";

const { Header, Content } = Layout;

function Login() {
  const [form] = Form.useForm();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout className="login-layout" style={{ height: "100vh" }}>
      <Header className="login-header">
        <Link to="/manager" className="logo-link">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{/* <img className="app_logo" src={Logo} height="50px" alt="logo" /> */}</div>
        </Link>
        <div className="systemlogin-text">System Login</div>
      </Header>
      <div className="head-divider">
        <Divider />
      </div>
      <Content>
        {/* <div><img className="img_tree" src={Tree} alt="login-tree" /> </div> */}
        <Form form={form} name="normal_login" className="login-form" onFinish={onFinish}>
          <div className="systemlogin-mbl">System Login</div>
          <Form.Item
            name="userID"
            label="User Id"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your User ID!",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" disabled={loading} htmlType="submit" className="login-form-button">
              {loading && <LoadingOutlined />} Log In
            </Button>
          </Form.Item>
          <Form.Item>
            <div style={{ textAlign: "center" }}>
              <Link className="login-form-forgot" to="/forgot-password">
                <span>
                  <KeyOutlined />
                </span>
                Forgot password?
              </Link>
            </div>
            <div className="fp-divider">
              <Divider />
            </div>
          </Form.Item>
        </Form>
      </Content>
      {/* <CommonFooter /> */}
      {/* <Footer style={{ textAlign: 'center', fontSize: '12px' }}><span><CopyrightOutlined /></span> v2 Technologies LTD-2020</Footer> */}
    </Layout>
  );
}

export default Login;
