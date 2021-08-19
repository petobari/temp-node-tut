const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("here is our short about history");
  }
  res.end(`<h1>Ooops!</h1>
  <p>We cant seem to find the page u r looking for</p>
  <a href="/">back home </a>`);
});

server.listen(5000);
