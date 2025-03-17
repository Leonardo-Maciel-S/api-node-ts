import express from "express";

const server = express();

interface Teste {}

server.get("/", (_: any, res: any) => {
  return res.send("Olá, DEV!");
});

export { server };
