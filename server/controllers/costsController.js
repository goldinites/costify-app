import costsService from "../services/costsService.js";

class costsController {
    createCostController(req, res) {
        costsService.createCostService(req, res);
    }
    getCostsOfCategoryController(req, res) {
        costsService.getCostsOfCategoryService(req, res)
    }
}

export default new costsController();
