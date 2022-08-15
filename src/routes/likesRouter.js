import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import {Like, Unlike} from "../controllers/likeController.js";

const likeRouter = Router();

likeRouter.post('/like', tokenValidator, Like);
likeRouter.delete('/unlike/:postId', tokenValidator, Unlike);

export default likeRouter;