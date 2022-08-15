import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import searchController from "../controllers/searchController.js";

const userRouter = Router();

userRouter.get('/users', tokenValidator, searchController);

export default userRouter