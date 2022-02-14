const course = 28;
let input = prompt('Введіть суму:');
let sum = input.split('U');
console.log(sum[0]);
money = +sum[0];
valute = sum[1];
function convertMoney(){
if (valute=='AH'){
    console.log(Math.round(money /  course) + ' USD');
}else{
  
    console.log(money*course + ' UAH');
}
}

convertMoney();