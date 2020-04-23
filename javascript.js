let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", "100000");
    time = prompt("Введите дату в формате YYYY-MM-DD","2020-12-23 ");
    while(isNaN(money) || money == "" || money == null){
    money = +prompt("Ваш бюджет на месяц?", "100000");
    }
} 

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
for (let i = 0; i < 2; i++)
{
   let a = prompt( "Введите обязательную статью расходов в этом месяце", "Продукты" );
   let b = +prompt("Во сколько обойдется?", "10000");
   if((typeof(a) === "string") && (typeof(a) != null) && 
    typeof(b) != 0 && a != "" && b != "" && a.length < 70)
   {
          appData.expenses[a] = b;
   }else{
       i=i-1;
   }
}
}
function chooseOptExpenses(){
    for( let i = 1; i < 4; i++){
    let a = prompt( "Статья необязательных расходов?");
    if( typeof(a) === "string" && typeof(a) != null && a!= "" && a.length <70){
    appData.optionalExpenses[i] = a;
    }else{
        i=i-1;
    }
    }
}
 chooseExpenses();
 function detectDayBudget(){
     appData.moneyPerDay = (appData.budget/30).toFixed();
     alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);
 }
//detectDayBudget();

function detectLevel(){
if(appData.moneyPerDay < 100){
    alert("Минимальный уровень достатка");
}else if(appData.moneyPerDay >=100 && appData.moneyPerDay < 2000){
    alert("Средний уровень достатка");
}
else if(appData.moneyPerDay > 2000){
    alert("Высокий уровень достатка");
}else{
    alert("Ошибка");
}
}
//detectLevel();

function checkSavings (){
    if(appData.savings == true)
    {
        let save = +prompt("Какова сумма накоплений?");
        while(isNaN(save) ||save  == "" || save == null){
            save = +prompt("Какова сумма накоплений?");
        }
        let percent = +prompt("Под какой процент?");
        while(isNaN(percent) ||percent  == "" || percent == null){
            percent = +prompt("Под какой процент?");
        }
        appData.mounthIncome = save/100/12 *percent;
        alert("Сумма Ваших начислений с депозита: "+ appData.mounthIncome);
    }
}
 
//checkSavings();
