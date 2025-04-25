import express = require("express");
import { homeRoutes } from "./home.route";

export const routes = (app: express.Express) =>{
    app.use(express.json())
    app.use(homeRoutes);

}