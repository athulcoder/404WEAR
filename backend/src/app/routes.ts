
import {Router } from "express";


const router = Router();

router.get("/health", (_, res)=>{
    res.status(200).json({
        success:true,
        message:"Express API gateway is healthy"
    });

});

export default router;
