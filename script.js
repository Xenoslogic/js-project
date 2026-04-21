let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 30;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

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
  const price1 = Number(servicePrice1);
  const price2 = Number(servicePrice2);
  return price1 + price2;
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


console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юани`);
console.log(screens.toLowerCase());
console.log(screens.split(', '));
console.log('Процент отката посреднику за работу ', fullPrice * (rollback / 100));