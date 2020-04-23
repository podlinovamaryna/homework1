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

for (let i = 0; i < 2; i++)
{
   let a = prompt( "Введите обязательную статью расходов в этом месяце", "Продукты" );
   console.log(a);
   let b = +prompt("Во сколько обойдется?", "10000");
   console.log(b);
   if((typeof(a) === "string") && (typeof(a) != null) && 
    typeof(b) != 0 && a != "" && b != "" && a.length < 70)
   {
          appData.expenses[a] = b;
          console.log(appData.expenses);
          console.log(i + "++");
   }else{
       i--;
       console.log(i + "--");
   }
}
    
 alert("Ежедневный бюджет " + appData.budget/30);
appData.moneyPerDay = appData.budget/30;

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


