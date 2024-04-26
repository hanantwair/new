import { Router } from "express";
import * as authController from "./Auth.controller.js";
import { validation } from "../../middelware/validation.js";
import * as validators from "./Auth.validation.js";

const router = Router();

router.post("/signup", validation(validators.signup), authController.signup);
router.post("/login", validation(validators.login), authController.login);

export default router;
