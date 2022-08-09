import { Router } from "express";
import { postSingUp } from "../controllers/authController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import signUpSchema from "../schemas/signUpSchema.js";
import { signUpValidator } from "../middlewares/authValidator.js";

const authRouter = Router();

authRouter.post('/signup', schemaValidator(signUpSchema), signUpValidator ,postSingUp);

export default authRouter;