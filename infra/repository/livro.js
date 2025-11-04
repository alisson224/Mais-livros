const { query } = require("../database");

async function consultarTodos() {
  const sql = `SELECT * FROM livro WHERE top_livros = true`;
  const resultados = await query(sql);
  return resultados;
}
async function consultarTops() {
  const sql = `SELECT * FROM livro WHERE top_livros = true`;
  const resultados = await query(sql);
  return resultados;
}

module.exports = { consultarTodos, consultarTops};
