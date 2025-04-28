import express from 'express'
import { routes } from './routes/index';
import cors from 'cors';


const app = express();


app.use(cors())
routes(app)



app.listen(3000, () =>{
    console.log("Rodando")
})