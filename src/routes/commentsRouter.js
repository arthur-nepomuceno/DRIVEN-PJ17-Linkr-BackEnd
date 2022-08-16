import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import {Comment} from "../controllers/commentsController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import commentSchema from "../schemas/commentSchema.js";

const likeRouter = Router();

likeRouter.post('/comments',schemaValidator(commentSchema), tokenValidator, Comment);

export default likeRouter;