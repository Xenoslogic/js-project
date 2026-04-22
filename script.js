let title;
let screens;
let screenPrice;
let rollback = 30;
let adaptive;
let service1;
let service2;

// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// let servicePercentPrice = Math.ceil(fullPrice - (fulllPrice * (rollback / 100)));

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые');


  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');

    // Если пользователь нажал «Отмена», прерываем цикл
    if (screenPrice === null) {
      break;
    }

  } while (!isNumber(screenPrice)) {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  }
  adaptive = confirm('Нужен ли адаптив на сайте?');
}

asking();

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);

}

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }

}

// Объявляем функцию
const getAllServicePrices = function () {

  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }
    sum += +prompt("Сколько это будет стоить?");
  }
  // Получаем стоимость с проверкой на число
  let priceInput;
  do {
    priceInput = prompt("Сколько это будет стоить?");

    // Если пользователь нажал «Отмена», прерываем цикл
    if (priceInput === null) {
      console.log("Ввод отменён пользователем");
      return sum; // Возвращаем текущую сумму (может быть 0 или частично посчитанной)
    }

    // Проверяем, что введено число
    if (!isNumber(priceInput)) {
      alert("Пожалуйста, введите корректное число!");
    }
  } while (!isNumber(priceInput));

  // Преобразуем в число и добавляем к сумме
  sum += Number(priceInput);

  return sum;
  // return price1 + price2;
};
// Вызываем функцию, сохраняем результат
const allServicePrices = getAllServicePrices();

// Функция getFullPrice — объявлена как function declaration
function getFullPrice() {
  return screenPrice + allServicePrices;
}

// Вызываем функцию и сохраняем результат в переменную fullPrice
fullPrice = getFullPrice();


function getTitle(title) {
  // Убираем пробелы в начале и в конце строки
  const trimmed = title.trim();

  // Если строка пустая после обрезки — возвращаем пустую строку
  if (trimmed === '') {
    return '';
  }

  // Первый символ — в верхний регистр, остальные — в нижний
  const firstChar = trimmed.charAt(0).toUpperCase();
  const rest = trimmed.slice(1).toLowerCase();

  return firstChar + rest;
}

function getServicePercentPrices() {
  const rollbackAmount = fullPrice * (rollback / 100);
  return fullPrice - rollbackAmount;
}

servicePercentPrice = getServicePercentPrices();




showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log('allServicePrices', allServicePrices);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юани`);
console.log(screens.toLowerCase());
console.log(screens.split(', '));
console.log('Процент отката посреднику за работу ', fullPrice * (rollback / 100));