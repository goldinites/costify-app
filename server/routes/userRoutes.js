import {Router} from "express";
import userController from "../controllers/userController.js";

const router = Router();

router.get('/users', (req, res) =>  userController.getUsersController(req, res));

export default router;
