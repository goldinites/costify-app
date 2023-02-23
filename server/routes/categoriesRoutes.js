import {Router} from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = Router();

router.post('/getCategories', (req, res) => {
    categoriesController.getCategoriesController(req, res)
});

router.post('/create', (req, res) => {
    categoriesController.createCategoryController(req, res)
});

router.post('/deleteCategory', (req, res) => {
    categoriesController.deleteCategoryController(req, res)
})

export default router;
