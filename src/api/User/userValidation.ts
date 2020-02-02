import Joi from "@hapi/joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser> {
    firstName: Joi.string().alphanum().max(30).required(),
    lastName: Joi.string().alphanum().max(30).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
});
