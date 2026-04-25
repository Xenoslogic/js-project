const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',

  // Функция проверки числа — теперь метод объекта
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  // Получение данных от пользователя
  asking: function () {
    this.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    this.screens = prompt('Какие типы экранов нужно разработать?', 'Простые');

    let priceInput;
    do {
      priceInput = prompt('Сколько будет стоить данная работа?');

      if (priceInput === null) {
        alert('Ввод отменён пользователем');
        return;
      }

      if (!this.isNumber(priceInput)) {
        alert('Пожалуйста, введите корректное число!');
      }
    } while (!this.isNumber(priceInput));

    this.screenPrice = Number(priceInput);
    this.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  // Расчёт стоимости дополнительных услуг
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        this.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        this.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      let priceInput;
      do {
        priceInput = prompt('Сколько это будет стоить?');

        if (priceInput === null) {
          alert('Ввод отменён пользователем');
          return sum;
        }

        if (!this.isNumber(priceInput)) {
          alert('Пожалуйста, введите корректное число!');
        }
      } while (!this.isNumber(priceInput));

      sum += Number(priceInput);
    }
    return sum;
  },

  // Расчёт полной стоимости
  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  // Форматирование заголовка
  getTitle: function (title) {
    const trimmed = title.trim();
    if (trimmed === '') {
      return '';
    }
    const firstChar = trimmed.charAt(0).toUpperCase();
    const rest = trimmed.slice(1).toLowerCase();
    return firstChar + rest;
  },

  // Расчёт стоимости после отката
  getServicePercentPrices: function () {
    const rollbackAmount = this.fullPrice * (this.rollback / 100);
    return this.fullPrice - rollbackAmount;
  },

  // Определение скидки
  getRollbackMessage: function (price) {
    if (price > 30000) {
      return 'Даём скидку в 10%';
    } else if (price > 15000 && price <= 30000) {
      return 'Даём скидку в 5%';
    } else if (price > 0) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что‑то пошло не так';
    }
  },

  // Основной метод запуска — выполняет все действия в нужном порядке
  start: function () {
    // Получаем данные от пользователя
    this.asking();

    // Рассчитываем стоимость дополнительных услуг
    this.allServicePrices = this.getAllServicePrices();

    // Рассчитываем полную стоимость
    this.fullPrice = this.getFullPrice();

    // Рассчитываем стоимость после отката
    this.servicePercentPrice = this.getServicePercentPrices();

    // Запускаем логирование результатов
    this.logger();
  },

  // Метод для вывода информации в консоль
  logger: function () {
    console.log('=== РЕЗУЛЬТАТЫ РАСЧЁТА ===');

    // Выводим все свойства и методы объекта с помощью for...in
    for (const key in this) {
      // Пропускаем метод start, чтобы он не выводился в логе (иначе будет рекурсия)
      if (key !== 'start' && key !== 'logger') {
        console.log(`${key}: ${this[key]}`);
      }
    }

    // Дополнительная информация
    console.log('Отформатированный заголовок:', this.getTitle(this.title));
    console.log('Сообщение о скидке:', this.getRollbackMessage(this.fullPrice));
  }
};

// Запускаем программу — вне объекта только один вызов
appData.start();
