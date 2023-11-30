import express from "express";
import { createClozeTest,getClozeTest } from "../controllers/cloze.controllers.js";


const router = express.Router();


router.post('/save/cloze',  createClozeTest);
router.get('/get/cloze',  getClozeTest);


export default router;