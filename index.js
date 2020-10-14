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
