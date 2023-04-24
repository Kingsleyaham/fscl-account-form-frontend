const { createProxyMiddleware } = require("http-proxy-middleware");

// const target = process.env.PROXY_ADDRESS || "http://localhost:5000";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://fcsl-account-form.onrender.com",
      changeOrigin: true,
    })
  );
};
