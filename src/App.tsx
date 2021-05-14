import React, { useCallback, useEffect } from "react";
import { Layout } from "antd";

import { GdpChart, TreasuryChart } from "./components/Charts";
import { useFeatureToggle } from "./hooks/useFeatureToggle";
import { FeatureArray, fetchFeatures } from "./services/FeatureToggle";

const { Header, Content } = Layout;

export const App = () => {
  const [isEnabled, enableFeature, disableFeature] = useFeatureToggle();

  const processFeatures = useCallback(async () => {
    try {
      const features = await fetchFeatures();
      features.forEach(([featureName, isEnabled]: FeatureArray) =>
        isEnabled ? enableFeature(featureName) : disableFeature(featureName)
      );
    } catch (_) {
      // do nothing
    }
  }, [enableFeature, disableFeature]);

  useEffect(() => {
    processFeatures();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content className="content">
        <GdpChart />
        {isEnabled("treasury_chart") && <TreasuryChart />}
      </Content>
    </Layout>
  );
};

export default React.memo(App);
