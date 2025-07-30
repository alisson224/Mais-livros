
const fs = require ("node:fs");


fs.readFile("./arq1.txt", function ( error1, resposta ){
  if(error1){  
    console.log("Erro ao ler o primeiro arquivo")
    return
  }

  fs.readFile("./arq2.txt", function ( error2, resposta2 ){
    if(error2){  
      console.log("Erro ao ler o primeiro arquivo")
      return
    }
    fs.readFile("./arq3.txt", function ( error3, resposta3 ){
      console.log("resposta", resposta.toString()+resposta2.toString()+resposta3.toString());
    
    
      if(error3){  
    console.log("Erro ao ler o primeiro arquivo")
    return
      }


    });
  });
});


console.log("FIM");

