
const fs = require ("node:fs");


fs.readFile("./arq3.txt", function ( error, resposta ){
  console.log("error", error);
  console.log("resposta", resposta.toString());
});

console.log("FIM"); 