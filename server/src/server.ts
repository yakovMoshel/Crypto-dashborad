import express, { NextFunction, Request, Response } from 'express';

const app = express();
app.use(express.json());


app.use((err : Error, req : Request, res : Response, next : NextFunction) => {
    res.status(500).json({massage : 'Something went wrong!', error: err.message })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});