# **Funpay Bot**
Всем привет! Этот репозиторий создан для биржи funpay.ru. В этом скрипте
присутствует спаммер сообщений и автоматическое поднятие лотов. Чтобы ими пользоваться,
ознакомтесь с инструкцией. Перед использованием проверьте правила funpay, чтобы не 
получить бан.
## Инструкция.
Зайдите на страницу с кнопкой 'Поднять предложения'. __Она будет только там, где у вас есть существующие лоты__.
 
Вот пример [лотов доты](https://prnt.sc/uz0rbk).
 
Открываем [код элемента](https://prnt.sc/uz0syl) и выбираем вкладку Console. Чтобы открыть код элемента,
попробуйте нажать на 'F12' или правой кнопкой мыши нажать на экран и выбрать 'Код элемента'.
 
Теперь у этого скрипта 2 функции :
* Спаммер
* Поднятие лотов (https://youtu.be/nW3BoK1xgWE - пример работы)

## Поднятие лотов.
В открытую консоль, сделанную из предыдущего пункта, впишите данный код.
```
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

```
Каждую секунду, скрипт будет пытаться поднять лоты. Консоль и эту страницу закрывать __нельзя__, иначе скрипт перестанет работать.
## Спаммер.
Здесь нужно будет зайти в диалог с человеком. Там вам нужно будет открыть консоль (Смотрите выше). В консоль вставляете данный код.
```
setInterval(() => {
    const messages = document.getElementsByName('content');
    const message = messages[0];
    const text = 'Можете заменить этот текст на свой. Главное чтобы он был в пределах кавычек';
    const submitButton = document.querySelector('.btn-round');

    message.value = text;
    submitButton.click();
}, 500);
```
Чтобы изменить сообщение, которое будет спаммиться, нужно заменить переменную text. Консоль и эту страницу закрывать __нельзя__, иначе скрипт перестанет работать.
### Создатель.
* fennyflop (гитхаб, вк, инстаграм)
* kazahilipationes (funpay, etc.)
