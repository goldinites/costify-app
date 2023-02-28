import userService from "../services/userService.js";

class userController {
    getUsersController(req, res) {
        userService.getUserService(req, res);
    }
}

export default new userController();
