require("dotenv").config();
const http = require("node:http");
const livroRepository = require("./infra/repository/livro");

const server = http.createServer(function (req, res) {
  //res.writeHead(200, {"content-type": "text/plain"})
  res.end("Ok bem vindo");
});

const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log("Inicializando servidor HTTP na porta " + port);
});