import React from "react";
import { Button, Input, Row, Col } from "antd";

function Login() {
  return (
    <div>
      <h1>login</h1>
      <Row gutter={[16, 16]}>
        <Col>
          <Button type="primary">hello</Button>
          <Input placeholder="Basic usage" />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
