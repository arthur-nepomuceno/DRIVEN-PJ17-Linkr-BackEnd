import {Router} from "express";
import signUpRouter from "./signUpRouter.js";
import signInRouter from "./signInRouter.js";
<<<<<<< HEAD
import postRouter from "./postRouter.js"
=======
import publishRouter from "./publishRouter.js";
>>>>>>> 14faf14c0fc4f8a23c33dfb7e62a1608c50dcdf6
import hashtagRouter from "./hashtagRouter.js";
import timelineRouter from "./timelineRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(postRouter);
router.use(hashtagRouter);
router.use(timelineRouter);

export default router;