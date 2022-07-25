'use strict'
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Статья обязательных расходов?', ''),
                b = prompt('Во сколько обойдется?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: '+ appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?', '');
            if (a != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i] = questionOptExpenses;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
            if (items != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach (function (itemmassive, i) {
            alert('Способы доп. заработка ' + (i+1) + ': ' + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ': ' + appData[key]);
}
