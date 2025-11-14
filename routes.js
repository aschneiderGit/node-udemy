const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello</title><head>");
    res.write("<body>");
    res.write("<h1>Hello, Welcome to the exercice</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title><head>");
    res.write(
      "<body><ul><li>User 1 </li><li>User 2 </li><li>User 3 </li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("body");
      const parsedBody = Buffer.concat(body).toString("utf-8");
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
};

module.exports = requestHandler;
