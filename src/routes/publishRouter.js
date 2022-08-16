import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import publishController from "../controllers/publishController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import publishSchema from "../schemas/publishSchema.js";
import updateController from "../controllers/updateController.js";
import updateSchema from "../schemas/updateSchema.js";
import updateValidator from "../middlewares/updateValidator.js";
import { hashtagValidator } from "../middlewares/hashtagValidator.js";


const publishRouter = Router();


publishRouter.post('/publish/:id', schemaValidator(updateSchema), tokenValidator , updateValidator ,updateController);
publishRouter.post('/publish',schemaValidator(publishSchema), tokenValidator, hashtagValidator, publishController);

export default publishRouter;