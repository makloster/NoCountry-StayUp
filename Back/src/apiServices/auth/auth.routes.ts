import express, { Request, Response, Router } from "express";

const authRouter: Router = express.Router();

authRouter.get("/", (req: Request, res: Response) => {
  res.json({
    status:"auth router working"
  })
})

export default authRouter;