import timelineCostsService from "../services/timelineCostsService.js";

class timelineCostsController {
    getTimelineController (req, res) {
        timelineCostsService.getTimelineService(req, res)
    }
    getCurrentPeriodController (req, res) {
        timelineCostsService.getCurrentPeriodService(req, res)
    }
}

export default new timelineCostsController();
