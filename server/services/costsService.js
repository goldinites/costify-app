import CostModel from "../models/costModel.js";

export const createCostService = (req, res) => {
    const request = req.body;
    CostModel.create({
        name: request.name,
        value: request.value,
        categoryId: request.categoryId,
        userId: request.userId,
        date: request.date,
        monthCreate: request.monthCreate,
        yearCreate: request.yearCreate
    })
        .then(newCost => res.status(200).json(newCost))
        .catch(e => console.log(e))
}

export const getCostsOfCategoryService = (req, res) => {
    const request = req.body;
    CostModel.findAll({
        where: {
            categoryId: request.id
        }
    })
        .then(costs => res.status(200).json(costs))
        .catch(e => console.log(e))
}
