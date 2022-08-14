import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js"
import publishController from "../controllers/publishController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import publishSchema from "../schemas/publishSchema.js"

const publishRouter = Router();

publishRouter.post('/publish',schemaValidator(publishSchema), tokenValidator, publishController);

export default publishRouter;