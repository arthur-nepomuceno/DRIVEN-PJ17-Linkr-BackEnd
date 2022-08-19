import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import {Comment,getPostComment} from "../controllers/commentsController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import commentSchema from "../schemas/commentSchema.js";

const commentsRouter = Router();

commentsRouter.post('/comments',schemaValidator(commentSchema), tokenValidator, Comment);
commentsRouter.get('/comments/:id', tokenValidator , getPostComment);

export default commentsRouter;