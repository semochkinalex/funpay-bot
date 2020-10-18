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

setInterval(function () {
    const openForm = () => {
        const raiseButton = document.querySelector('.js-lot-raise');    
        raiseButton.click();
    };
    openForm();
    const checkEverything = () => {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((item) => {
            if(!item.checked){
                item.click();
            }
        })
    };
    openForm();
    setTimeout(function () {
        checkEverything();
        const submit = document.querySelector('.js-lot-raise-ex');
        submit.click();
    }, 1000);
}, 1000)   

// Добавить лот

const addButton = document.querySelector('.js-lot-offer-edit');
addButton.click();
setTimeout(() => {
    const summaryText = '⭐Автоматическое поднятие предложений для Funpay⭐';
    const descriptionText = "Text";
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
