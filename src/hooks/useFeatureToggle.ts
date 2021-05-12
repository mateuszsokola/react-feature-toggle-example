import { useContext } from "react";
import { FeatureToggleContext } from "../context/FeatureToggleContext";

const createFeatureToggle = () => {
  return function useFeatureToggle() {
    const { enabledFeatures, enableFeature, disableFeature } =
      useContext(FeatureToggleContext);

    const isEnabled = (featureName: string) => {
      return enabledFeatures.includes(featureName);
    };

    return [isEnabled, enableFeature, disableFeature] as [
      (featureName: string) => boolean,
      (featureName: string) => void,
      (featureName: string) => void
    ];
  };
};

export const useFeatureToggle = createFeatureToggle();
