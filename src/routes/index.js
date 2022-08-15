import {Router} from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
import publishRouter from "./publishRouter.js";
import hashtagRouter from "./hashtagRouter.js";
import timelineRouter from "./timelineRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(publishRouter);
router.use(hashtagRouter);
router.use(timelineRouter);
router.use(userRouter);

export default router;  