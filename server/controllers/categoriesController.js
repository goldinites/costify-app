import {
    createCategoryService,
    getUserCategoriesService,
    deleteCategoryService
} from "../services/categoriesService.js"

class categoriesController {
    createCategoryController(req, res) {
        createCategoryService(req, res)
    }
    getCategoriesController(req, res) {
       getUserCategoriesService(req, res)
    }
    deleteCategoryController(req, res) {
        deleteCategoryService(req, res)
    }
}

export default new categoriesController();
