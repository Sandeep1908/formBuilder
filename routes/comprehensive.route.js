import express from "express";
import { createComprehension,getAllComprehensions } from "../controllers/comprehensize.controller.js";


const router = express.Router();


 
router.post('/save/comprehensions',  createComprehension);
router.get('/get/comprehensions',    getAllComprehensions);



export default router;