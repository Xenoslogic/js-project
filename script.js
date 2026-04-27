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

  // Проверка, что значение является числом
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  // Проверка, что значение является строкой (содержит хотя бы одну букву)
  isStringWithText: function (str) {
    if (!str || typeof str !== 'string') return false;
    // Ищем хотя бы один буквенный символ
    return /[a-zA-Zа-яА-Я]/.test(str);
  },

  asking: function () {
    // Проверка названия проекта (должна быть строка с текстом)
    let titleInput;
    do {
      titleInput = prompt('Как называется ваш проект?', 'Калькулятор верстки');
      if (titleInput === null) {
        alert('Ввод отменён пользователем');
        return;
      }
      if (!this.isStringWithText(titleInput)) {
        alert('Пожалуйста, введите название проекта (должно содержать хотя бы одну букву)');
      }
    } while (!this.isStringWithText(titleInput));
    this.title = titleInput;

    // Проверка типов экранов (должна быть строка с текстом)
    let screensInput;
    do {
      screensInput = prompt('Какие типы экранов нужно разработать?', 'Простые');
      if (screensInput === null) {
        alert('Ввод отменён пользователем');
        return;
      }
      if (!this.isStringWithText(screensInput)) {
        alert('Пожалуйста, укажите типы экранов (должно содержать хотя бы одну букву)');
      }
    } while (!this.isStringWithText(screensInput));
    this.screens = screensInput;

    // Проверка стоимости работы (должно быть число)
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

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      // Проверка названия услуги (должна быть строка с текстом)
      let serviceInput;
      do {
        serviceInput = prompt(`Какой ${i + 1}-й дополнительный тип услуги нужен?`);
        if (serviceInput === null) {
          alert('Ввод отменён пользователем');
          return sum;
        }
        if (!this.isStringWithText(serviceInput)) {
          alert('Пожалуйста, укажите название услуги (должно содержать хотя бы одну букву)');
        }
      } while (!this.isStringWithText(serviceInput));

      if (i === 0) {
        this.service1 = serviceInput;
      } else if (i === 1) {
        this.service2 = serviceInput;
      }

      // Проверка стоимости услуги (должно быть число)
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

  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  getTitle: function (title) {
    const trimmed = title.trim();
    if (trimmed === '') {
      return '';
    }
    const firstChar = trimmed.charAt(0).toUpperCase();
    const rest = trimmed.slice(1).toLowerCase();
    return firstChar + rest;
  },

  getServicePercentPrices: function () {
    const rollbackAmount = this.fullPrice * (this.rollback / 100);
    return this.fullPrice - rollbackAmount;
  },

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

  start: function () {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.servicePercentPrice = this.getServicePercentPrices();
    this.logger();
  },

  logger: function () {
    console.log('=== РЕЗУЛЬТАТЫ РАСЧЁТА ===');

    for (const key in this) {
      if (key !== 'start' && key !== 'logger' &&
        key !== 'isNumber' && key !== 'isStringWithText') {
        console.log(`${key}: ${this[key]}`);
      }
    }

    console.log('Отформатированный заголовок:', this.getTitle(this.title));
    console.log('Сообщение о скидке:', this.getRollbackMessage(this.fullPrice));
  }
};

// Запускаем программу
appData.start();
