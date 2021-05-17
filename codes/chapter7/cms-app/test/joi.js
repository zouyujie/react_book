const Joi = require('joi');
const schema = {
    username: Joi.string().alphanum().min(2).max(16).required().error(new Error('错误信息')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2020),
    email: Joi.string().email()
};
Joi.validate({ username: 'jiekzou', birthyear: 1988 }, schema);
