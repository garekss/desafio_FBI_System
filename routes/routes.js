import express from "express";
const router = express.Router();

import { home, loginFBI, validarToken } from "../controllers/fbi.controllers.js";


router.get("/", home);
router.get("/SignIn",loginFBI)
router.get("/dashboard", validarToken)
// router.get("/dashboard", getToken)

export default router;