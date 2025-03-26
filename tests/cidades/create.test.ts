import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
  it("should create an user ", async () => {
    const res = await testServer.post("/cidades").send({
      nome: "Planaltina",
      estado: "Goiás",
    });

    expect(res.statusCode).toBe(StatusCodes.CREATED);
  });

  it("should validate field 'nome' on create cidade", async () => {
    const res = await testServer.post("/cidades").send({
      estado: "Goiás",
    });

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body.errorsResult.body.nome).toBe("Este campo é obrigatório");
  });

  it("should validate field 'estado' on create cidade", async () => {
    const res = await testServer.post("/cidades").send({
      nome: "Planaltina",
    });

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body.errorsResult.body.estado).toBe("Este campo é obrigatório");
  });

  it("should validate field length of 'estado' on create cidade", async () => {
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
