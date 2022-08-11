import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js"
import publishController from "../controllers/publishController.js";

const publishRouter = Router();

publishRouter.post('/publish', tokenValidator, publishController);

export default publishRouter;