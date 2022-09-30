import express, { Request, Response, Router } from "express";

const userRouter: Router = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json({
    status:"working users route"
  })
})

export default userRouter;