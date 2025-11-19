const { query } = require("../database");

async function consultarTodos() {
  const sql = `SELECT * FROM livro`;
  const resultados = await query(sql);
  return resultados;
}
async function consultarTops() {
  const sql = `SELECT * FROM livro WHERE top_livro = true`;
  const resultados = await query(sql);
  return resultados;
}

async function consultaMaisAdquiridos() {
  const sql = `SELECT * FROM livro WHERE mais_adquiridos = true`;
  const resultados = await query(sql);
  return resultados;
}

async function consultarCurtidas() {
  const sql = `SELECT * FROM livro ORDER BY curtidas DESC LIMIT 5`;
  const resultados = await query(sql);
  return resultados;
}

module.exports = { consultarTodos, consultarTops, consultaMaisAdquiridos, consultarCurtidas};

