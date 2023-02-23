import {Router} from "express";
import userRouter from "./userRoutes.js"
import categoriesRoutes from "./categoriesRoutes.js";

const router = Router();

router.use(userRouter);
router.use('/categories', categoriesRoutes);

export default router;
