/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardValidation } from '~/validations/boardValidation';
import { boardController} from '~/controllers/boardController';

const router = express.Router();

router.route('/:id')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({
            message: 'Welcome to Trello API'
        })
    })
    .post(boardValidation.createNew, boardController.createNew);

export const boardRoutes = router