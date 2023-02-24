import {
    createCostService, getCostsOfCategoryService,
} from "../services/costsService.js"

class categoriesController {
    createCostController(req, res) {
        createCostService(req, res);
    }
    getCostsOfCategoryController(req, res) {
        getCostsOfCategoryService(req, res)
    }
}

export default new categoriesController();
