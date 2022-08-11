import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import signInSchema from "../schemas/signInSchema.js";
import signInValidator from "../middlewares/signInValidator.js";
import signIn from "../controllers/signInController.js";

const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(signInSchema), signInValidator, signIn);

export default signInRouter;
