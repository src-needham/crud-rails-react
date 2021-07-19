import { Layout } from "antd";
import React from "react";
import Fish from "./Fish";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{padding: "0 50px"}}>
      <div className="site-layout-content" style={{ margin: "100px auto"}}>
        <h1>Fish Catalogue</h1>
        <Fish />
      </div>
    </Content>
    <Footer style={{ textAlign: "center"}}>CRight ©../../..</Footer>
  </Layout>
);