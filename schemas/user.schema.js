const Joi = require('joi');

const id = Joi.number().integer();
const user = Joi.string().min(3).max(20);
const nameUser = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);
const password = Joi.string().min(4).max(10);
const email = Joi.string().min(4).max(20);

const createUserSchema = Joi.object({
  user: user.required(),
  nameUser: nameUser.required(),
  lastName: lastName.required(),
  password: password.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  user: user,
  nameUser: nameUser,
  lastName: lastName,
  email: email,
  password: password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
