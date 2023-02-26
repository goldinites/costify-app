import CostModel from "../models/costModel.js";
import {arrayUnique} from "../helpers/utils";
import CategoryModel from "../models/categoryModel.js";

export const getTimelineService = (req, res) => {
    const request = req.body;
    const periodFilter = request.periodFilter;
    CostModel.findAll({
        where: {
            userId: request.userId
        },
        attributes: ['yearCreate', 'monthCreate', 'dayCreate']
    })
        .then(timeline => {
            prepareTimelineHandler(periodFilter, timeline, res);
        })
}

const prepareTimelineHandler = (periodFilter, timeline, res) => {
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
    const years = arrayUnique(timeline.map((timelineItem, i) => {
        return timeline[i].yearCreate
    }));
    years.forEach(year => {
            const timelineItemsOfCurrentYear = timeline.filter((timelineItem) => {
                return timelineItem.yearCreate === year
            });
            const arrayMonths = arrayUnique(timelineItemsOfCurrentYear.map((month, i) => {
                return timelineItemsOfCurrentYear[i].monthCreate
            }));
            let months = arrayMonths.map(month => {
                if (periodFilter === 'days') {
                    const arrayDays = timelineItemsOfCurrentYear.filter((timelineItem) => {
                        return timelineItem.monthCreate === month
                    });
                    let days = arrayUnique(arrayDays.map((day, i) => {
                        return arrayDays[i].dayCreate
                    }))
                    days = days.sort()

                    return {name: monthNames[month - 1], month, days }
                }

                return {name: monthNames[month - 1], month }
            })

            months = months.sort((a, b) => a.month - b.month)

        if (periodFilter === 'years') {
            result.push({ year })
        } else {
            result.push({year, months})
        }
    })

    result = result.sort((a, b) => a.year - b.year);

    res.status(200).json(result);
}

export const getCurrentPeriodService = (req, res) => {
    const request = req.body;
    const filter = {
        userId: request.userId
    };

    if(request.year) {
        filter.yearCreate = request.year
    }

    if(request.month) {
        filter.monthCreate = request.month
    }

    if(request.day) {
        filter.dayCreate = request.day
    }

    CostModel.findAll({
        where: filter
    })
        .then(costs => {
            const categoriesIds = arrayUnique(costs.map((cost, i) => {
                return costs[i].categoryId
            }))
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
    let periodTotal = 0;
    const diagram = {
        labels: [],
        datasets: [
            {
                label: 'test',
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

        periodTotal += +preparedCategory.total
    })

    result.categories = categories
    result.diagram = diagram
    result.total = periodTotal

    res.status(200).json(result)
}
