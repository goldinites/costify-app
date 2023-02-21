import userModel from "../models/userModel.js";

export const getUsersService = (req, res) => {
    userModel.findOne({
        attributes: ['login', 'id']
    }).then(user => {
        res.status(200).json(user);
    })
}
