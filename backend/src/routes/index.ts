import { Router } from "express"

export default () => {
  // new router

  const router = Router()

  router.get("", (req, res) => {
    res.send("I'M ALIVE")
  })

  return router
}
