import { Router } from "express";
import isValidToken from "../middlewares/isValidToken.js"
import publishController from "../controllers/publishController.js";

const publishRouter = Router();

publishRouter.post('/publish', isValidToken, publishController);

export default publishRouter;