import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator.js";
import publishController from "../controllers/publishController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import publishSchema from "../schemas/publishSchema.js";
<<<<<<< HEAD
import updateController from "../controllers/updateController.js";
import updateSchema from "../schemas/updateSchema.js";
import updateValidator from "../middlewares/updateValidator.js";

const publishRouter = Router();

publishRouter.post('/publish',schemaValidator(publishSchema), tokenValidator, publishController);
publishRouter.post('/publish/:id', schemaValidator(updateSchema), tokenValidator , updateValidator ,updateController);
=======
import { hashtagChecker } from "../middlewares/hashtagValidator.js";
import updateController from "../controllers/updateController.js";
import updateSchema from "../schemas/updateSchema.js";
import updateValidator from "../middlewares/updateValidator.js";

const publishRouter = Router();

publishRouter.post('/publish',schemaValidator(publishSchema), tokenValidator, publishController);
publishRouter.post('/publish/:id', schemaValidator(updateSchema), tokenValidator , updateValidator ,updateController);
publishRouter.post('/publish',schemaValidator(publishSchema), tokenValidator, hashtagChecker, publishController);
>>>>>>> 14faf14c0fc4f8a23c33dfb7e62a1608c50dcdf6

export default publishRouter;