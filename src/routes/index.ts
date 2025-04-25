import express = require("express");
import { homeRoutes } from "./home.route";
import cors from 'cors';


export const routes = (app: express.Express) =>{
    app.use(express.json())
    app.use(homeRoutes);
    app.use(cors())
   

}