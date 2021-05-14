import React, { useState } from "react";
import { FeatureToggleContext } from "../context/FeatureToggleContext";

type Props = {
  children: any;
};

export const FeatureToggle = ({ children }: Props) => {
  const [enabledFeatures, setEnabledFeatures] = useState<string[]>([]);

  const enableFeature = (featureName: string) => {
    setEnabledFeatures([...enabledFeatures, featureName]);
  };

  const disableFeature = (featureName: string) => {
    setEnabledFeatures(
      enabledFeatures.filter((feature) => feature !== featureName)
    );
  };

  return (
    <FeatureToggleContext.Provider
      value={{ enabledFeatures, enableFeature, disableFeature }}
    >
      {children}
    </FeatureToggleContext.Provider>
  );
};
