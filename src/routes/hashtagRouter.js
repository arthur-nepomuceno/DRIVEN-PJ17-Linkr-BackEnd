import { Router } from "express";
import { trendingHashtags, hashtagPosts } from "../controllers/hashtagController.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const hashtagRouter = Router();

hashtagRouter.get("/hashtag", trendingHashtags);
hashtagRouter.get("/hashtag/:hashtag", tokenValidator, hashtagPosts);

export default hashtagRouter;