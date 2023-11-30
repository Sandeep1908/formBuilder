import express from "express";
import { storeCategorizeData , getCategorizeData } from "../controllers/categorize.controllers.js";
const router = express.Router();


router.post('/save/categorize', storeCategorizeData);
router.get('/get/categorize',  getCategorizeData);


export default router;