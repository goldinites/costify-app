import CategoryModel from "../models/categoryModel.js";
import CostModel from "../models/costModel.js";

class categoriesService {
    constructor() {
        this.categoryModel = CategoryModel
        this.costModel = CostModel
    }
    getUserCategoriesService (req, res) {
        const request = req.body;
        this.categoryModel.findAll({
            where: {
                userId: request.userId
            }
        })
            .then(userCategories => {
                res.status(200).json(userCategories);
            })
            .catch(e => console.log(e))
    }
    createCategoryService (req, res) {
        const request = req.body;
        this.categoryModel.create({
            name: request.name,
            color: request.color,
            userId: request.userId,
        })
            .then(newCategory => {
                res.status(200).json(newCategory)
            })
            .catch(e => console.log(e))
    }
    deleteCategoryService (req, res) {
        const request = req.body;
        this.categoryModel.destroy({
            where: {
                id: request.id
            }
        })
            .then(deletedCategoryStatus => {
                if(deletedCategoryStatus) {
                    this.costModel.destroy({
                        where: {
                            categoryId: request.id
                        }
                    })
                        .then(deleteCostsStatus => {
                            res.status(200).json(deleteCostsStatus)
                        })
                }
            })
            .catch(e => console.log(e))
    }
}

export default new categoriesService()
