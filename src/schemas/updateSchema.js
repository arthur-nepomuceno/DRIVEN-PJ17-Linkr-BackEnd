import Joi from "joi";

const updateSchema = Joi.object({
  content: Joi.string().required(),
  id: Joi.number().integer().required()
});
  
export default updateSchema;