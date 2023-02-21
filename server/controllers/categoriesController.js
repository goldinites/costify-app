import { createCategoryService } from "../services/categoriesService.js"

class categoriesController {
    createCategoryController(req, res) {
        createCategoryService(req, res);
    }
}

export default new categoriesController();
