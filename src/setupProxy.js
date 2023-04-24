const { createProxyMiddleware } = require("http-proxy-middleware");

const target =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://fcsl-account-form.onrender.com/";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
