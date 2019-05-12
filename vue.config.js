module.exports = {
  lintOnSave: false,
  baseUrl: "/",
  devServer: {
    proxy: {
      "/microModule": {
        target: "http://192.168.1.141:8090/microModule",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/microModule": "/"
        }
      }
    }
  }
};
