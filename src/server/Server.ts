import express, { Request, Response } from 'express'

const server = express();

server.get('/', (_: any, res: any) => {
  return res.send('Olá, DEV!')
})

export { server }