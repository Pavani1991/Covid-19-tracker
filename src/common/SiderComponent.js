import { Layout, Menu } from "antd";
// import "./SiderComponent.css";
import { Link } from "react-router-dom";
import React from "react";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Sider } = Layout;

class SiderComponent extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/safetyMeasures">
                <span>Safety Measures</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/trackCases">
                <span>Track cases</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/selfDiagnosis">
                <span>Self Diagnosis</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default SiderComponent;
