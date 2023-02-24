import categoryModel from "../models/categoryModel.js";
import CostModel from "../models/costModel.js";

export const getUserCategoriesService = (req, res) => {
    const request = req.body;
    categoryModel.findAll({
        where: {
            userId: request.userId
        }
    })
        .then(userCategories => {
            res.status(200).json(userCategories);
            return userCategories;
        })
        .catch(e => console.log(e))
}

export const getUserCategoriesWithCostsService = (req, res) => {
    const request = req.body;
    categoryModel.findAll({
        where: {
            userId: request.userId
        }
    })
        .then(userCategories => {
            res.status(200).json(userCategories);
        })
        .catch(e => console.log(e))
}

export const getUserCategoryByIdService = (req, res) => {
    const request = req.body;
    categoryModel.findAll({
        where: {
            userId: request.userId,
            id: request.categoryId
        }
    })
        .then(category => res.status(200).json(category))
        .catch(e => console.log(e))
}

export const createCategoryService = (req, res) => {
    const request = req.body;
    categoryModel.create({
        name: request.name,
        color: request.color,
        userId: request.userId,
    })
        .then(newCategory => res.status(200).json(newCategory))
        .catch(e => console.log(e))
}

export const deleteCategoryService = (req, res) => {
    const request = req.body;
    categoryModel.destroy({
        where: {
            id: request.id
        }
    })
        .then(deletedCategoryStatus => {
            if(deletedCategoryStatus) {
                CostModel.destroy({
                    where: {
                        categoryId: request.id
                    }
                })
                    .then(deleteCostsStatus => res.status(200).json(deleteCostsStatus))
            }
        })
        .catch(e => console.log(e))
}
