import {Router} from "express";
import timelineCostsController from "../controllers/timelineCostsController.js";

const router = Router();

router.post('/getTimeline', (req, res) => {
    timelineCostsController.getTimelineController(req, res)
});

router.post('/getCurrentPeriod', (req, res) => {
    timelineCostsController.getCurrentPeriodController(req, res)
})

export default router;
