import express from "express";
import { validation } from "../../middleware";
import { controllerHandler } from "./../../shared/controllerHandler";
import { UserController } from "./userController";
import { UserValidationSchema } from "./userValidation";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();

router.use(validation(UserValidationSchema));

router.get("/", call(User.getAllUsers, (req, _res, _next) => [req.params.id]));

export const userRouter = router;
