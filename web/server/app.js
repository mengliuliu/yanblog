const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: path.join(__dirname, "../.env") });

function setCustomCacheControl(res, path) {
  const excludeReg = [/service-worker\.js$/, /index\.html$/];
  // 不缓存的页面
  if (excludeReg.some(v => v.test(path))) {
    // Custom Cache-Control for HTML files
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  }
}

app.use(
  express.static(path.join(__dirname, "../build"), {
    setHeaders: setCustomCacheControl,
  })
);

app.listen(process.env.PORT, "0.0.0.0", err => {
  if (err) {
    console.info(err);
    return;
  }
  console.info(`访问链接:http://localhost:${process.env.PORT} --服务已启动`);
});
