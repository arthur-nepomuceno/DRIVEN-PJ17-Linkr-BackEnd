import {Router} from "express";
import signInRouter from "./signInRouter.js";
import authRouter from "./authRouter.js";
import publishRouter from "./publishRouter.js"

const router = Router();

router.use(signInRouter);
router.use(authRouter);
router.use(publishRouter)

export default router;