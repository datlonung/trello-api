/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { MongoClient, ServerApiVersion } from 'mongodb';
import {env} from '~/config/environment';

let trelloDatabaseInstance = null; // bien global

// khoi nao obj mongoclientinstance connect toi mongodb


const MongoClientInstance = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: false
    }
})
// ket noi toi database
export const connectToMongoDB = async () => {
    try {
        await MongoClientInstance.connect() // goi ket noi toi mongoatlas toi Url da khai bao trong mongoclientinstance
        trelloDatabaseInstance = MongoClientInstance.db(env.DATABASE_NAME) // ket noi thanh cong lay ra database theo ten va gan vao lai trellodatabaseinstance
    } catch (error) {
        console.error('An error occurred while connecting to MongoDB: ', error)
    }
}

// dong ket noi mongodb khi can
export const closedb =  async() => {
   await MongoClientInstance.close()
}
// lay db tu obj trellodatabaseinstance
// chi chay lenh nay khi chac chan da ket noi  thanh cong mongodb
export const getdb = () => {
    if (!trelloDatabaseInstance) {
        throw new Error('You must connect to the database first!')
    }
    return trelloDatabaseInstance
}
