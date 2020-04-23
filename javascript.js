let money = +prompt("Ваш бюджет на месяц?", "100000");
let time = prompt("Введите дату в формате YYYY-MM-DD","2020-12-23 ");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


function BudgetOneDay (){
let obj = {};
let obj1 = {};
let questionFirst = prompt( "Введите 1 обязательную статью расходов в этом месяце", "Продукты" );
let questionSecond = +prompt("Во сколько обойдется?", "10000");
obj={questionFirst, questionSecond};
questionFirst = prompt( "Введите 2 обязательную статью расходов в этом месяце", "Комунальные" );
questionSecond = +prompt("Во сколько обойдется?", "3000");
obj1={questionFirst, questionSecond};
appData.expenses = {obj, obj1};
let oneDay = (appData.budget-(appData.expenses.obj.questionSecond+appData.expenses.obj1.questionSecond))/30;
alert("Ваш бюджет на день:"+ oneDay);
} 
BudgetOneDay();
console.log(appData);
console.log(appData);
    