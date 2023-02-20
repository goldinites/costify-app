import { getUsersService } from "../services/userService.js"

class userController {
    getUsersController(req, res) {
        getUsersService(req, res);
    }
}

export default new userController();
