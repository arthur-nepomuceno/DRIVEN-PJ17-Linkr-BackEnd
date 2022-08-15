import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import {Like, Unlike} from "../controllers/likeController.js";

const likeRouter = Router();

likeRouter.post('/like', tokenValidator, Like);
likeRouter.post('/unlike', tokenValidator, Unlike);

export default likeRouter;