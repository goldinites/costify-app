import {
    getTimelineService
} from "../services/timelineCostsService.js";

class categoriesController {
    getTimelineController (req, res) {
        getTimelineService(req, res)
    }
}

export default new categoriesController();
