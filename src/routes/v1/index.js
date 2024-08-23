/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */


import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { boardRoutes } from '~/routes/v1/boardRoute';

const router = express.Router();

//check apis v1/status
router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'Service API v1 is running'
  });
});

// boardAPI
router.use('/boards', boardRoutes)


export const APIs_V1 = router