require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const express = require("express");
const app = express();

app.get("/", async function (req, res) {
  const livrosTops = await livroRepository.consultarTops();
  const livrosMaisAdquiridos = await livroRepository.consultaMaisAdquiridos();
  const itensMaisCurtidos = await livroRepository.consultaMaisCurtidos();

  let itensTops = "";
  for (livro of livrosTops) {
    itensTops += `<li>${livro.titlo}</li>`;
  }

  let itensMaisAdquiridos = "";
  for (livro of livrosMaisAdquiridos) {
    itensMaisAdquiridos += `<li>${livro.titlo}</li>`;
  }


  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <p>Itens Tops</p>
    <ul>
    ${itensTops}
    </ul>

    <p>Itens mais adquiridos</p>
    <ul>
    ${itensMaisAdquiridos}
    </ul>
    <p>Itens mais curtidos</p>
    <ul>
    ${itensMaisCurtidos}
    </ul>
  </body>
</html>`;

  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Inicializando server");
});
