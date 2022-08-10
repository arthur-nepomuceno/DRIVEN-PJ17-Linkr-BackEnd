import {Router} from "express";
import signInRouter from "./signInRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use(signInRouter);
router.use(authRouter);

export default router;