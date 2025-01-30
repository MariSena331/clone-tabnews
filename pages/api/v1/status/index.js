function status(request, response) {
  response
    .status(200)
    .json({ message: "Sucesso ão verificar o status da API" });
}

export default status;
