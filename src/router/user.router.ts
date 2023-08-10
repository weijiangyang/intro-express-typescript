import { Router } from 'express';
import { getAll } from '../controller/user.controller'
import { getById } from "../controller/user.controller";
import { add } from "../controller/user.controller";
import { edit } from "../controller/user.controller";
const userRouter = Router();

userRouter.get('/', getAll)

userRouter.get("/:id",getById);

userRouter.post("/",add);

userRouter.post("/id",edit);

userRouter.delete("/:id", (req: any, res: any) => {
  res.send(`Coucour, vous êtres sur la route: /user/id`);
});
export default userRouter;