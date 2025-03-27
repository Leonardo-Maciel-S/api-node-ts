import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

const sut = async (id: string) => {
  const res = await testServer.get(`/cidades/${id}`);
  return res;
};

describe("Cidades - getById", () => {
  it("Should return a 'Cidade'", async () => {
    const id = "1234";
    const res = await sut(id);

    if (!res) return;

    expect(res.statusCode).toBe(StatusCodes.OK);
    expect(res.body).toEqual({
      id: id,
      nome: "teste",
      estado: "goias",
    });
  });

  it("Should return an error when typeof id not is number", async () => {
    const res = await sut("teste");
    if (!res) return;

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errorsResult.params");
    expect(res.body.errorsResult.params.id).toBe("Formato digitado é invalido");
  });
});
