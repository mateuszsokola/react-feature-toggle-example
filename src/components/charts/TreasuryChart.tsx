import React from "react";
import { Card, Result } from "antd";

import "./chart.css";

export const TreasuryChart = () => {
  return (
    <Card title="10-Year Treasury Constant Maturity">
      <div className="ant-card-chart">
        <Result status="500" />
      </div>
    </Card>
  );
};
