const http = require("http");

//function rqListener(req, res) {} anonymized in the createServer() param

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
