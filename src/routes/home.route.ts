import express = require("express");
import { homeControllers } from "../controllers/home.controller";

export const homeRoutes = express.Router()

homeRoutes.get("/menu", homeControllers.GetAll)