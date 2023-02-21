import categoryModel from "../models/categoryModel.js";

export const getUserCategories = (req, res) => {
    const request = req.body;
    categoryModel.findAll({
        where: {
            userId: request.userId
        }
    })
        .then(userCategories => res.status(200).json(userCategories))
        .catch(e => console.log(e))
}

export const getUserCategoryById = (req, res) => {
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
