import { Router } from "express";
import timeline from "../controllers/timelineController.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const timelineRouter = Router();

timelineRouter.get('/timeline', tokenValidator, timeline);

export default timelineRouter