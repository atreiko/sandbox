"use strict";

const DEVELOPMENT_TEAM = [1, 10, 15, 7, 5];
const BACKLOG = [10, 14, 2, 54, 43, 23];

const deadlineDate = new Date("2020-05-29");


function evaluateProjectCompletion(team, backlog, date) {

    let teamSum = team.reduce((sum, current) => sum + current, 0);

    let backlogSum = backlog.reduce((sum, current) => sum + current, 0);

    let currentDate = new Date();
    let differenceDate = (date - currentDate) / 1000 / 60 / 60 / 24;

    let workDays = 0;
    while (currentDate < date) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            workDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    let totalDaysComplete = (backlogSum / teamSum);

    totalDaysComplete = Math.round(totalDaysComplete);

    if (totalDaysComplete < workDays) {
        return (`Все задачи будут успешно выполнены за ${workDays - totalDaysComplete} дня до наступления дедлайна!`);
    } else if (totalDaysComplete === workDays) {
        return (`Все задачи успешно выполнены в срок`);
    } else {
        return (`Команде разработчиков придется потратить дополнительно ${(totalDaysComplete - workDays)* 8} часов после дедлайна, чтобы выполнить все задачи в беклоге`);
    }
}

console.log(evaluateProjectCompletion(DEVELOPMENT_TEAM, BACKLOG, deadlineDate));