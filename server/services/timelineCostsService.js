import CostModel from "../models/costModel.js";
import {arrayUnique} from "../helpers/utils";

export const getTimelineService = (req, res) => {
    CostModel.findAll({
        attributes: ['yearCreate', 'monthCreate']
    })
        .then(timeline => {
            prepareTimelineHandler(timeline, res);
        })
}

const prepareTimelineHandler = (timeline, res) => {
    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]
    let result = [];
    const years = arrayUnique(timeline.map((timelineItem, i) => timeline[i].yearCreate));

    years.forEach(year => {
        const timelineItemsOfCurrentYear = timeline.filter(timelineItem => timelineItem.yearCreate === year);
        const arrayMonths = arrayUnique(timelineItemsOfCurrentYear.map((month, i) => timelineItemsOfCurrentYear[i].monthCreate));
        let months = arrayMonths.map(month => {
            return { name: monthNames[month - 1], month }
        })

        months = months.sort((a,b) => a.month - b.month)

        result.push({ year, months })
    })

    result = result.sort((a, b) => a.year - b.year);

    res.status(200).json(result);
}
