import { Request, Response } from "express";
import{ menu} from "../dados/dados"


export class homeControllers{
    static GetAll(req:Request, res:Response){
        res.send(menu)
    }
}