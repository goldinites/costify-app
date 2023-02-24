import {Router} from "express";
import timelineCostsController from "../controllers/timelineCostsController.js";

const router = Router();

router.get('/getTimeline', (req, res) => {
    timelineCostsController.getTimelineController(req, res)
});

export default router;
