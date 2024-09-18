const { createServer } = require("node:http"); //node.js

const hostname = "127.0.0.1"; //localhost
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\nNguyễn Nhật Quang");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
