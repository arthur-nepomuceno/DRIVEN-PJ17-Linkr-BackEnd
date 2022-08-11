import Joi from "joi";

const publishSchema = Joi.object({
  content: Joi.string(), 
  url: Joi.string().uri().required()

  });
  
  export default publishSchema;