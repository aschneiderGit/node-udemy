const http = require("http");

//function rqListener(req, res) {} anonymized in the createServer() param

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node App</title></head>");
  res.write("<body><h1>Hello world !</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
