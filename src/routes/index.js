import {Router} from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
import publishRouter from "./publishRouter.js"

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(publishRouter)

export default router;