/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes';


const createNew = async (req, res, next) => {
    try {
        console.log('req.body:',req.body)
        console.log('req.query:',req.query)
        console.log('req.params:',req.params)
        console.log('req.files:',req.files)
        console.log('req.cookies:',req.cookies)
        console.log('req.jwtDecoded:',req.jwtDecoded)

        // dieu huong sang tang service

        // co result thi tra ve phia client
        res.status(StatusCodes.CREATED).json({
            message: 'Create a new board',
          })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER.ERROR).json({
            message: error.message
        })
    }
}


export const boardController = {
    createNew
}