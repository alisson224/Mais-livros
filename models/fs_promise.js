const fs = require("node:fs");

function readFile(arquivo){
  const promessa = new Promise(function(resolve, reject){
    fs.readFile(arquivo, function(err, resposta){
      if(err){
        reject(err)
        return
      }
      resolve(resposta.toString())
    })
  })
  return promessa;
}

readFile("./arq1.txt")
   .then(function(valor){
    console.log(valor)
  })

.catch(function (error){
  console.log("Deu error" + error);
})
.finally(function () {
});