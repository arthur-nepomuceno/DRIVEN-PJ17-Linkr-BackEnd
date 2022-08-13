import {Router} from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
import publishRouter from "./publishRouter.js"
import timelineRouter from "./timelineRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(publishRouter);
router.use(timelineRouter);

export default router;