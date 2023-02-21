import {Router} from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = Router();

router.post('/categories/create', (req, res) => {
    categoriesController.createCategoryController(req, res)
});

export default router;
