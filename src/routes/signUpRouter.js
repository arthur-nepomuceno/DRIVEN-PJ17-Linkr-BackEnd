import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import signUpSchema from "../schemas/signUpSchema.js";
import signUpValidator from "../middlewares/signUpValidator.js";
import signUp from "../controllers/signUpController.js";

const signUpRouter = Router();

signUpRouter.post('/signup', schemaValidator(signUpSchema), signUpValidator ,signUp);

export default signUpRouter;