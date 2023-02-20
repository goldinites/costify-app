import userModel from "../models/userModel.js";

export const getUsersService = (req, res) => {
    userModel.findAll().then(user => {
        res.status(200).json(user);
    })
}
