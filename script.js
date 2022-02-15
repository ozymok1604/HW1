function formatName(namee) {
  index = namee.indexOf(" ");

  let string =
    namee[0].toUpperCase() +
    namee.slice(1, index) +
    " " +
    namee[index + 1].toUpperCase() +
    namee.slice(index + 2);
  return string;
}

function convertMoney(input) {
  const exchangeRate = 28;
  const sum = input.split("U");
  let input2 = input.split("");
  const include = input2.includes("D");
  money = +sum[0];

  if (include == false) {
    exchangedMoney = Math.round(money / exchangeRate) + " USD";
  } else {
    exchangedMoney = money * exchangeRate + " UAH";
  }
  return exchangedMoney;
}

function getRandomNumber(min, max) {
  min = 10000000;
  max = 100000000;
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  4;
  return rand;
}

function deleteLetters() {
  let string = prompt("Введіть рядок:");
  let letter = string[0];
  let str = string.split("");
  //str.splice(1,1);
  len = str.length;

  let k = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == letter) {
      k = k + 1;
    }
  }

  while (k > 0) {
    let index = str.indexOf(letter);
    str.splice(index, 1);
    k = k - 1;
  }
  return str.join("");
}

function isPalindrom() {
  let str = prompt("Введіть рядок:");
  let str1 = str.split("");
  let str2 = str1.reverse();
  let k = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] == str2[i]) {
      k += 1;
    }
  }
  if (k == len) {
    console.log("Palindrom");
  } else {
    console.log("Isn't palindrom");
  }

}

function letterDelete() {
  let str = prompt("Введіть рядок:");
  string = str.split("");
  let len = string.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (string[i] == string[j]) {
        string.splice(i, 1);
        string.splice(j - 1, 1);
      }
    }
  }
  console.log(string.join(" "));
}
