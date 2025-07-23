//@ts-check

const calculadora = require("../models/calculadora")

test ("criando primeiro teste", function (){
console.log ("oi");
});

test ("soma de 2 + 2 deve retornar 4", function (){
const resultado = calculadora.soma (2,2)
expect (resultado).toBe (4)
});

test ("soma de 2 + 4 deve retornar 6", function (){
const resultado = calculadora.soma (2,4)
expect (resultado).toBe (6)
});
