import { Router } from "express";
import trendingHashtags from "../controllers/hashtagController.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const hashtagRouter = Router();

hashtagRouter.get("/hashtag", /* tokenValidator,  */trendingHashtags);

export default hashtagRouter;