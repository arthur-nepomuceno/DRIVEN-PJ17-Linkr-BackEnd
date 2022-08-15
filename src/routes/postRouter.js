import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import publishSchema from "../schemas/publishSchema.js";
import updateSchema from "../schemas/updateSchema.js";
import tokenValidator from "../middlewares/tokenValidator.js"
import updateValidator from "../middlewares/updateValidator.js";
import deleteValidator from "../middlewares/deleteValidator.js";
import publishController from "../controllers/publishController.js";
import updatePost from "../controllers/updateController.js";
import deletePost from "../controllers/deleteController.js";

const postRouter = Router();

postRouter.post('/publish',schemaValidator(publishSchema), tokenValidator, publishController);
postRouter.put('/update', schemaValidator(updateSchema), tokenValidator , updateValidator ,updatePost);
postRouter.delete('/delete/:id', tokenValidator, deleteValidator ,deletePost);

export default postRouter;