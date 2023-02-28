import userModel from "../models/userModel.js";
import CategoryModel from "../models/categoryModel.js";
import CostModel from "../models/costModel.js";

class userService {
    constructor() {
        this.userModel = userModel
        this.categoryModel = CategoryModel
        this.costModel = CostModel
    }
    getUserService(req, res) {
        this.userModel.findOne({
            attributes: ['login', 'id']
        }).then(user => {
            this.categoryModel.findAll({
                where: {
                    userId: user.id
                }
            })
                .then(categories => {
                    this.costModel.findAll({
                        where: {
                            userId: user.id
                        }
                    })
                        .then(costs => {
                            const hasRecords = !!categories.length && !!costs.length;
                            this.prepareUserDataService(user, hasRecords, res)
                        })
                })
        })
    }
    prepareUserDataService(user, hasRecords, res) {
        const userData = {
            ...user.dataValues,
            hasRecords,
        }
        res.status(200).json(userData);
    }
}

export default new userService();
