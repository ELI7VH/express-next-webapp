import { RequestHandler } from "express"

export const middlewareTemplate: RequestHandler = (req, res, next) => {
  // middleware function template
  console.log(">", req.method, req.path, req.body)

  next()
}
