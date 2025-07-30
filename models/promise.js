const readfile = require("node:readline");
const terminal = readfile.createInterface({
  input:process.stdin,
  output:process.stdout,
});

terminal.question("qual seu nome: \n",  function(valor) {
   console.log("seja bem vindo " + valor);
});