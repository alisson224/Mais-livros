require("dotenv").config();
const livroRepository = require("./infra/repository/livro");

livroRepository
.consultarTodos()
.then(function (resultado) {
  console.log(resultado);
})
.catch(function (error) {
  console.log("Deu ruim", error);
});