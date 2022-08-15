import Joi from "joi";

const deleteSchema = Joi.object({
  id: Joi.number().integer().required()
});
  
export default deleteSchema;