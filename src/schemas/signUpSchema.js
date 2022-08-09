import Joi from "joi";

const signUpSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(/[a-zA-Z0-9!@#$%^&*()\-__+.]{11,}/)).required(),
    username: Joi.string().pattern(new RegExp(/[a-zA-Z0-9!@#$%^&*()\-__+.]{3,20}/)).required(),
    pictureUrl: Joi.string().uri().required()
});

export default signUpSchema;