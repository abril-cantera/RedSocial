const Joi = require('joi');

const id = Joi.number().integer();
const user = Joi.string().min(3).max(20);
const email = Joi.string().min(4).max(20);

const createUserSchema = Joi.object({
  user: user.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  user: user,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
