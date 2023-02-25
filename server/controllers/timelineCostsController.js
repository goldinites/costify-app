import {
    getCurrentPeriodService,
    getTimelineService
} from "../services/timelineCostsService.js";

class categoriesController {
    getTimelineController (req, res) {
        getTimelineService(req, res)
    }
    getCurrentPeriodController (req, res) {
        getCurrentPeriodService(req, res)
    }
}

export default new categoriesController();
