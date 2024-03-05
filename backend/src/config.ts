import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

export default async () => {
  const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || "test",
    user: process.env.DB_USER || "test",
    password: process.env.DB_PASSWORD || "test",
  }

  const queryClient = postgres(
    `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`,
  )
  const db = drizzle(queryClient)

  return {
    port: process.env.PORT || 3000,
    db,
  }
}
