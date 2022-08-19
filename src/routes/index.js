import {Router} from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
import postRouter from "./postRouter.js"
import publishRouter from "./publishRouter.js";
import hashtagRouter from "./hashtagRouter.js";
import timelineRouter from "./timelineRouter.js";
import userRouter from "./userRouter.js";
import likeRouter from "./likesRouter.js"
import commentsRouter from "./commentsRouter.js"

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(publishRouter);
router.use(postRouter);
router.use(hashtagRouter);
router.use(timelineRouter);
router.use(userRouter);
router.use(likeRouter);
router.use(commentsRouter);

export default router;  