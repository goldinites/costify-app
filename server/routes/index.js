import {Router} from "express";
import userRouter from "./userRoutes.js"
import categoriesRoutes from "./categoriesRoutes.js";
import costsRoutes from "./costsRoutes.js";
import timelineCostsRoutes from "./timelineCostsRoutes.js";

const router = Router();

router.use(userRouter);
router.use('/categories', categoriesRoutes);
router.use('/costs', costsRoutes);
router.use('/timeline', timelineCostsRoutes);

export default router;
