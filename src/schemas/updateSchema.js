import Joi from "joi";

const updateSchema = Joi.object({
  content: Joi.string().required(),
});
  
export default updateSchema;