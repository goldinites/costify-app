import CostModel from "../models/costModel.js";
import {arrayUnique} from "../helpers/utils";
import CategoryModel from "../models/categoryModel.js";

export const getTimelineService = (req, res) => {
    const request = req.body;
    CostModel.findAll({
        where: {
            userId: request.userId
        },
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
            return {name: monthNames[month - 1], month}
        })

        months = months.sort((a, b) => a.month - b.month)

        result.push({year, months})
    })

    result = result.sort((a, b) => a.year - b.year);

    res.status(200).json(result);
}

export const getCurrentPeriodService = (req, res) => {
    const request = req.body;
    CostModel.findAll({
        where: {
            yearCreate: request.year,
            monthCreate: request.month,
            userId: request.userId
        }
    })
        .then(costs => {
            const categoriesIds = arrayUnique(costs.map((cost, i) => costs[i].categoryId))
            CategoryModel.findAll({
                where: {
                    id: categoriesIds
                }
            })
                .then(categories => {
                    const periodData = {categories, costs}
                    prepareTimelineCategories(periodData, res)
                })
        })
}

const prepareTimelineCategories = (period, res) => {
    const result = {};
    const categories = [];
    const diagram = {
        labels: [],
        datasets: [
            {
                backgroundColor: [],
                data: [],
                hoverOffset: 4
            }
        ]
    };
    period.categories.forEach(category => {
        const categoryCosts = period.costs.filter(cost => cost.categoryId === category.id)
        const categoryTotal = () => {
            let total;
            if (categoryCosts.length > 1) {
                total = categoryCosts.reduce((accumulator, current) => {
                    return +accumulator + +current.value
                }, 0)
            } else if (categoryCosts.length === 1) {
                total = categoryCosts[0].value
            } else {
                total = 0
            }
            return total
        }

        const preparedCategory = {
            ...category.dataValues,
            costs: categoryCosts,
            total: categoryTotal()
        }
        categories.push(preparedCategory)

        diagram.labels.push(preparedCategory.name)
        diagram.datasets[0].backgroundColor.push(preparedCategory.color)
        diagram.datasets[0].data.push(preparedCategory.total)
    })

    result.categories = categories;
    result.diagram = diagram

    res.status(200).json(result)
}
