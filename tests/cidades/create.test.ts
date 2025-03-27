import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
  it("should create a 'Cidade' ", async () => {
    const res = await testServer.post("/cidades").send({
      nome: "Planaltina",
      estado: "Goiás",
    });

    expect(res.statusCode).toBe(StatusCodes.CREATED);
  });

  it("Should return a 'field required' error for 'nome'", async () => {
    const res = await testServer.post("/cidades").send({
      estado: "Goiás",
    });

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body.errorsResult.body.nome).toBe("Este campo é obrigatório");
  });

  it("should return a 'field required' error for 'estado'", async () => {
    const res = await testServer.post("/cidades").send({
      nome: "Planaltina",
    });

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body.errorsResult.body.estado).toBe("Este campo é obrigatório");
  });

  it("should return a 'minimum 3 characters' error for the 'estado' field", async () => {
    const res = await testServer.post("/cidades").send({
      nome: "Planaltina",
      estado: "12",
    });

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body.errorsResult.body.estado).toBe(
      "Deve ter pelo menos 3 caracteres",
    );
  });
});
