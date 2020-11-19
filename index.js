// Спамер чата

setInterval(() => {
    const messages = document.getElementsByName('content');
    const message = messages[0];
    const text = 'Hello, i am a bot. This action was performed automatically';
    const submitButton = document.querySelector('.btn-round');

    message.value = text;
    submitButton.click();
}, 5000);

// Поднятие заказов

// Намеренный "быдло-код"
setInterval(function () {
  document.querySelector('.js-lot-raise').click();
  setTimeout(function () {
    document.querySelectorAll("input[type='checkbox']")
      .forEach((ngweadasd) => {
        if (!ngweadasd.checked) {
          ngweadasd.click();
        }
      })
    document.querySelector('.js-lot-raise-ex')
      .click();
  }, 1000);
}, 1000)

// Добавить лот

const addButton = document.querySelector('.js-lot-offer-edit');
addButton.click();
setTimeout(() => {
    const summaryText = '⭐Автоматическое поднятие предложений для Funpay⭐';
    const descriptionText = "Любой текст";
    const price = 30;
    const summaryInput = document.querySelector("input[name='fields[summary]'");
    summaryInput.value = summaryText;
    const descriptionInput = document.querySelector("textarea[name='fields[desc]'");
    descriptionInput.value = descriptionText;
    const priceInput = document.querySelector("input[name='price']");
    priceInput.value = price;
    const amountInput = document.querySelector("input[name='amount']");
    amountInput.value = 999;
}, 1000)
