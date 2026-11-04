import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

/*  THIS FILE ACTIVATE WHEN IN APP WE USE USER BECUSE IN USER WE CALL USERROUTER
    AND THIS IS USER ROUTER FILE
    IN THIS FILE WE WRITE AY ROUTE 
    GAVE DIFFERENT PAGES

    EX:-

    - /api/v1/users/register
    - /api/v1/users/login
    - /api/v1/users/logout
    - /api/v1/users/profile
     */

const router = Router()


router.route("/register").post(registerUser)
// router.post("/register", registerUser); ANOTHER WAY TO WRITE


export default router