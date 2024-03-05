import config from "./config"
import express from "express"
import { middlewareTemplate } from "./middleware"

const app = async () => {
  const { port, db } = await config()

  const server = express()
  server.use(express.json())
  server.use(middlewareTemplate)
  server.set("db", db)

  // controllers
  // db - drizzle - pg
  // routes
}

app()
