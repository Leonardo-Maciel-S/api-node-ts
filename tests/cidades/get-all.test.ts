import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - getAll", () => {
  afterEach(() => jest.clearAllMocks());

  it("Should return a list of 'Cidade'", async () => {
    const res = await testServer.get("/cidades");

    if (!res) return;

    expect(res.statusCode).toBe(StatusCodes.OK);
    expect(res.body).toHaveProperty("cidades");
  });

  it("Should return an error when 'limit' was not numeric or is null", async () => {
    const res = await testServer.get("/cidades?limit=");

    if (!res) return;

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errorsResult.query.limit");
  });

  it("Should return an error when 'page' was not numeric or is null", async () => {
    const res = await testServer.get("/cidades?page=");

    if (!res) return;

    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errorsResult.query.page");
  });
});
