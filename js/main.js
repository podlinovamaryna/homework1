//кнопка начать рассчет
let btnStarts = document.getElementById("start");
// все блоки класса result-table
let arrResultTable = document.querySelector(".result-table");
//каждый блок с классом название - value
let budgetValue = document.getElementsByClassName("budget-value")[0];
let daybudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0];
let yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0];
// поля input с обязательными расходами
let expensesInput = document.getElementsByClassName("expenses-item");
// кнопка утвердить обязательные расходы
let expensesItemBtn = document.getElementsByTagName("button")[0]; 
//кнопка рассчитать
let countBudgetBtn = document.getElementsByTagName("button")[2]; 
// кнопка утвердить необязательные расходы
let optionalExpensesBtn = document.getElementsByTagName("button")[1]; 

//поля input с необязательными расходами
let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
// Статьи возможного дохода
let chooseIncome = document.querySelector(".choose-income");

// накопления чекбокс
let checkSavings = document.getElementById("savings");
//input сумма
let chooseSum = document.querySelector(".choose-sum");
//input процент
let choosePercent = document.querySelector(".choose-percent");
//год
let yearValue = document.querySelector(".year-value");
//месяц
let monthValue = document.querySelector(".month-value");
//день
let dayValue = document.querySelector(".day-value");

//рмоврмдоа

let money, time;
   
     btnStarts.addEventListener('click',function(){
    time = prompt("Введите дату в формате YYYY-MM-DD","2020-12-23 ");
    money = +prompt("Ваш бюджет на месяц?", "100000");
    while(isNaN(money) || money == "" || money == null){
    money = +prompt("Ваш бюджет на месяц?", "100000");
    }
    appData.budget = money;
    appData.money = money;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener("click",function(){
    let sum = 0;
 for (let i = 0; i < expensesInput.length; i++)
      {
   let a = expensesInput[i].value;
   let b = expensesInput[++i].value;
   if((typeof(a) === "string") && (typeof(a) != null) && 
    typeof(b) != 0 && a != "" && b != "" && a.length < 70)
   {
       console.log("Все верно");
          appData.expenses[a] = b;
          sum += + b;
   }else{
       i=i-1;
   }
   } 
   expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function(){
for( let i = 0; i < optionalExpensesItem.length; i++){
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
}
});

countBudgetBtn.addEventListener("click", function(){
    if(appData.budget != undefined){
     appData.moneyPerDay = (appData.budget/30).toFixed();
     daybudgetValue.textContent = appData.moneyPerDay;
    if(appData.moneyPerDay < 100){
       levelValue.textContent = "Минимальный уровень достатка";
    }else if(appData.moneyPerDay >=100 && appData.moneyPerDay < 2000){
    levelValue.textContent = "Средний уровень достатка";
    }
    else if(appData.moneyPerDay > 2000){
    levelValue.textContent = "Высокий уровень достатка";
    }else{
    levelValue.textContent = " Ошибка ";
    } 
    }else{
    daybudgetValue.textContent =  "Введите доходы кнопкой 'начать расчет' ";
}
});

chooseIncome.addEventListener("input", function(){
    let items = chooseIncome.value;
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
  if(appData.savings == true){
      appData.savings = false;
  }else{
      appData.savings = true;
  }
});

chooseSum.addEventListener("input", function(){
if(appData.savings == true){
   let sum = chooseSum.value,
      percent = choosePercent.value;

    appData.mounthIncome = sum/100/12 *percent;
    appData.yearIncome = sum/100*percent;
    
    monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
}
});

choosePercent.addEventListener("input", function(){
if(appData.savings == true){
    let sum = chooseSum.value,
    percent = choosePercent.value;

  appData.mounthIncome = sum/100/12 *percent;
  appData.yearIncome = sum/100*percent;
  
  monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
  yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
}
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};