import { Router } from "express";
import { postSingUp } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";

const authRouter = Router();

authRouter.post('/signup', validateSchema(signUpSchema), postSingUp);

export default authRouter;