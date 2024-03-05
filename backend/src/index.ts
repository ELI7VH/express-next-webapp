import config from "./config"
import express from "express"
import { middlewareTemplate } from "./middleware"
import routes from "./routes"
import connectDb from "./db"

const app = async () => {
  // TODO: https://orm.drizzle.team/docs/get-started-postgresql

  const { port } = await config()
  const db = connectDb()

  const server = express()
  server.use(express.json())
  server.use(middlewareTemplate)

  server.set("db", db)
  server.use("/", routes())

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

app()
