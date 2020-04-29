import Joi from '@hapi/joi';

export const UserValidationSchema = Joi.object().keys({
    firstName: Joi.string().alphanum().max(30).required(),
    lastName: Joi.string().alphanum().max(30).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
});
