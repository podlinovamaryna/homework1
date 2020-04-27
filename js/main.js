//кнопка начать рассчет
let btnStarts = document.getElementById("start");
// все блоки класса result-table
let arrResultTable = document.querySelector(".result-table");
//каждый блок с классом название - value
let budgetValue = document.getElementsByClassName("budget-value");
let daybudgetValue = document.getElementsByClassName("daybudget-value");
let levelValue = document.getElementsByClassName("level-value");
let expensesValue = document.getElementsByClassName("expenses-value");
let optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value");
let incomeValue = document.getElementsByClassName("income-value");
let monthsavingsValue = document.getElementsByClassName("monthsavings-value");
let yearsavingsValue = document.getElementsByClassName("yearsavings-value");
// поля input с обязательными расходами
let expensesInput = document.getElementsByClassName("expenses-item");
// кнопка утвердить обязательные расходы
let expensesItemBtn; 
//кнопка рассчитать
let countBudgetBtn;
// кнопка утвердить необязательные расходы
let optionalExpensesBtn;
let buttons = document.getElementsByTagName("button");
for( let i = 0; i < buttons.length; i++ ){
    if(buttons[i].className == "expenses-item-btn")
    {
        expensesItemBtn = buttons[i];
    }else if(buttons[i].className == "count-budget-btn"){
        countBudgetBtn = buttons[i];
    }else if(buttons[i].className == "optionalexpenses-btn"){
        optionalExpensesBtn = buttons[i];
    }
}
console.log(expensesItemBtn);
console.log(countBudgetBtn);
console.log(optionalExpensesBtn);
//поля input с необязательными расходами
let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
// Статьи возможного дохода
let chooseIncome = document.querySelector(".choose-income");
console.log(chooseIncome);
// накопления чекбокс
let savings = document.querySelector(".savings");
//input сумма
let chooseSum = document.querySelector(".chooseSum");
//input процент
let choosePercent = document.querySelector(".choose-percent");
//год
let yearValue = document.querySelector(".year-value");
//месяц
let monthValue = document.querySelector(".month-value");
//день
let dayValue = document.querySelector(".day-value");

//рмоврмдоа

