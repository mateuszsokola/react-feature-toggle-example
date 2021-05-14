module.exports = {
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      before: (app) => {
        app.get("/features.json", (req, res) => {
          res.json({
            treasury_chart: process.env.FEATURE_TREASURY_CHART === "true",
          });
        });
      },
    };
  },
};
