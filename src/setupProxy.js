const { createProxyMiddleware } = require("http-proxy-middleware");

const target =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://fscl-account-form.cyclic.app/";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
