import { Router } from "express";
import timeline from "../controllers/timelineController.js";
import tokenValidator from "../middlewares/tokenValidator.js";
import timelineValidator from "../middlewares/timelineValidator.js";

const timelineRouter = Router();

timelineRouter.get('/timeline', tokenValidator, timelineValidator ,timeline);

export default timelineRouter