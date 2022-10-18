const express = require("express");
const app = express();
const fs = require("fs");
const ejs = require("ejs"); // npm install ejs 필요!

app.get("/", (req, res) => {
    htmlstream = fs.readFileSync(__dirname + "/views/index.ejs","utf8");
    res.writeHead(200, {"Content-Type":"text/html; charset=utf8"});
    res.end(ejs.render(htmlstream, {data: "hi"}));
});

app.listen(8080, function () {
  console.log("서버 실행");
});