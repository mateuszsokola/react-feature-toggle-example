import React from "react";
import { Layout } from "antd";

import { GdpChart, TreasuryChart } from "./components/charts";

const { Header, Content } = Layout;

export const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <GdpChart />
        <TreasuryChart />
      </Content>
    </Layout>
  );
};

export default App;
