/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

const createNew = async (req, res, next) => {
  const correctConditions = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
        'string.base': 'Title must be a string',
        'string.empty': 'Title is required',
        'string.min': 'Title should have a minimum length of {#limit}',
        'string.max': 'Title should have a maximum length of {#limit}',
        'any.required': 'Title is required',
        'string.trim': 'Title should not have white space',
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  })

  try {
    await correctConditions.validateAsync(req.body,{
        abortEarly: false, // chi dinh abort early: false[defaut: true] de truong hop co nhieu loi thi tra ve tat ca loi
        allowUnknown: true,
        stripUnknown: true
    })

    next() //de chuyen qua middleware hoac controller tiep theo
    } catch (err) {
        console.log(err);
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: err.message,
    });
}
}

export const boardValidation = {
  createNew
}
