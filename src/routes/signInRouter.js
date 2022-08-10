import { Router } from "express";
import signIn from "../controllers/signInController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import isValidEmail from "../middlewares/isValidEmail.js"
import loginSchema from "../schemas/loginSchema.js";

const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(loginSchema),isValidEmail, signIn);

export default signInRouter;
