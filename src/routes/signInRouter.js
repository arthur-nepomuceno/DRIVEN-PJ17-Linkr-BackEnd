import { Router } from "express";
import signIn from "../controllers/signInController.js";
import {validateSchema} from "../middlewares/validateSchema.js"; 
import isValidEmail from "../middlewares/isValidEmail.js"
import loginSchema from "../schemas/loginSchema.js";

const signInRouter = Router();

signInRouter.post('/signin', validateSchema(loginSchema),isValidEmail, signIn);

export default signInRouter;
