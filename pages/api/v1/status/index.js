import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response
    .status(200)
    .json({ message: "Sucesso ão verificar o status da API" });
}

export default status;
