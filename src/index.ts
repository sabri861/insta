import 'reflect-metadata';
import 'dotenv/config';
import express from "express";
import { configureExpress } from './app/src/config/express';
import mongoose from 'mongoose';

const PORT = process.env.PORT;

export const app = express()

configureExpress(app)

mongoose.connect(process.env.URL_MONGODB).then(()=> {
    console.log('ok')
}).catch((e)=> {
    console.log(e)}
)

app.listen(PORT, () => {
    console.info(`Starting server on http://localhost:${PORT}`);
})
