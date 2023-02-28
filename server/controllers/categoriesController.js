import categoriesService from "../services/categoriesService.js";

class categoriesController {
    getCategoriesController(req, res) {
        categoriesService.getUserCategoriesService(req, res)
    }
    createCategoryController(req, res) {
        categoriesService.createCategoryService(req, res)
    }
    deleteCategoryController(req, res) {
        categoriesService.deleteCategoryService(req, res)
    }
}

export default new categoriesController();
