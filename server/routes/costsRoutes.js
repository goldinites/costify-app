import {Router} from "express";
import costsController from "../controllers/costsController.js";

const router = Router();

router.post('/create', (req, res) => {
    costsController.createCostController(req, res)
});

router.post('/getCostsOfCategory', (req, res) => {
    costsController.getCostsOfCategoryController(req, res)
})

export default router;
