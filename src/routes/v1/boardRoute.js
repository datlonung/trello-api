/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({
            message: 'Welcome to Trello API'
        })
    })
    .post((req, res) => {
        res.status(StatusCodes.CREATED).json({
            message: 'Create a new board'
        })
    })

export const boardRoutes = router