let title = 'lesson 02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 100;
let rollback = 50;
let fullPrice = 200;
let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ', screenPrice, ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ', fullPrice, ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase());
console.log(screens.split(', '));
console.log('Процент отката посреднику за работу ', fullPrice * (rollback / 100));