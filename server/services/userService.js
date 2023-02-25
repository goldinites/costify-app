import userModel from "../models/userModel.js";
import CategoryModel from "../models/categoryModel.js";
import CostModel from "../models/costModel.js";

export const getUsersService = (req, res) => {
    userModel.findOne({
        attributes: ['login', 'id']
    }).then(user => {
        CategoryModel.findAll({
            where: {
                userId: user.id
            }
        })
            .then(categories => {
                CostModel.findAll({
                    where: {
                        userId: user.id
                    }
                })
                    .then(costs => {
                      const hasRecords = !!categories.length && !!costs.length;
                      checkUserRecords(user, hasRecords, res)
                    })
            })

    })
}

const checkUserRecords = (user, hasRecords, res) => {
    const userData = {
        user,
        hasRecords,
    }
    res.status(200).json(userData);
}
