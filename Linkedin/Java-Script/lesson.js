/* "use strict"

/* use strict - На протяжении долгого времени JavaScript
 развивался без проблем с обратной совместимостью. 
 Новые функции добавлялись в язык, в то время как 
 старая функциональность не менялась.
Преимуществом данного подхода было то, что существующий
 код продолжал работать. А недостатком – что любая ошибка
или несовершенное решение, принятое создателями
avaScript, застревали в языке навсегда.
Так было до 2009 года, когда появился ECMAScript 5 (ES5).
 Он добавил новые возможности в язык и изменил некоторые
из существующих. Чтобы устаревший код работал,
как и раньше, по умолчанию подобные изменения
 не применяются. Поэтому нам нужно явно их активировать
  с помощью специальной директивы: "use strict". 

  use strict - нужно включать всегда
/* в кансоле в хроме чтобы не активировать код при нажатии
 enter а перевести строку используем shift + enter 
 
 /* чтобы вызвать переменую используем let присфаивать
  значение не обезательнотойсти переменная = 0 необезательно 
  let a
    , b = 'hello'
    , c = 25; 
    /* 
    Имя переменной должно содержать только буквы,
     цифры или символы $ и _.
    
     Первый символ не должен быть цифрой.
    
/* если нет use strict можно не использовать let 
const car = 'subaru'
/* Чтобы объявить константную, то есть, 
неизменяемую переменную, используйте const вместо let:
Если программист уверен, что переменная никогда не будет 
меняться, он может гарантировать это и наглядно донести до каждого,
 объявив её через const. 

 let name = 'Джон'
    , admin = name;
    alert(admin);
let our_planet_name
    , current_user_name
    /* 
    Обычно мы используем буквы в верхнем регистре для констант, которые «жёстко закодированы». Или, другими словами, когда значение известно до выполнения скрипта и записывается непосредственно в код.

В нашем примере, birthday именно такая переменная. Поэтому мы можем использовать заглавные буквы.

В отличие от предыдущей, переменная age вычисляется во время выполнения
 скрипта. Сегодня у нас один возраст, а через год уже совсем другой. 
 Она является константой, потому что не изменяется при выполнении кода.
  Но она является «менее константной», чем birthday: она вычисляется, 
  поэтому мы должны сохранить её в нижнем регистре.
    

    // js - динамически типизирован
    /* 
    BigInt
В JavaScript тип «number» не может содержать числа больше, 
чем 2^53 (или меньше, чем -2^53 для отрицательных). Это техническое
 ограничение вызвано их внутренним представлением. 
 2^53 – это достаточно большое число, состоящее из 16 цифр,
  поэтому чаще всего проблем не возникает. Но иногда нам нужны
   действительно гигантские числа, например в криптографии или при 
   использовании метки времени («timestamp») с микросекундами.
Тип BigInt был добавлен в JavaScript, чтобы дать возможность работать
 с целыми числами произвольной длины.
Чтобы создать значение типа BigInt, необходимо добавить n
 в конец числового литерала:
    
   let str = "Привет";
   let str2 = 'Одинарные кавычки тоже подойдут';
   let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`
   , language = prompt('JS','JavaScript');
//    операции тоже можно делать в Обратные кавычки
/* 
Булевый тип (boolean) может принимать только два значения: true (истина) и
 false (ложь).Такой тип, как правило, используется для хранения значений
  да/нет: true значит «да, правильно», а false значит «нет, не правильно».

/* 
Специальное значение null не относится ни к одному из типов, описанных выше.
Оно формирует отдельный тип, который содержит только значение null:

/* 
Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.

Оно означает, что «значение не было присвоено».

Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:


typeof str
typeof (b)

/* вместо Number() можно написать "+" 
/* Благодаря этому присваивание можно использовать как часть более сложного выражения: 
/* === и !== - не преобразует все типы в число для сравнения
не путать с == и !=

если выдает ошибку при операциях на сравнения прочитать :
alert(`${language}`);

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK

/* Мы рассмотрели 3 функции браузера для взаимодействия с пользователем:

alert
показывает сообщение.
prompt
показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный текст в поле ввода или null, если была нажата кнопка «Отмена» или Esc с клавиатуры.
confirm
показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false, если нажата кнопка «Отмена» или Esc с клавиатуры.
Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать с остальной частью страницы до тех пор, пока окно не будет закрыто.

На все указанные методы распространяются два ограничения:

Расположение окон определяется браузером. Обычно окна находятся в центре.
Визуальное отображение окон зависит от браузера, и мы не можем изменить их вид. 

let user_name = prompt('Ваше имя?','')
alert(`${user_name}`)

let official_JS_name = prompt('Какое «официальное» название JavaScript?','');
if (official_JS_name == 'ECMAScript') {
  alert(`Верно!`);
}else{
  alert(`Не знаете? ECMAScript!`);
};

let number = prompt('введите число','');
if (number > 0) {
  alert(1);
}else if(number < 0) {
  alert(-1);
}else{
  alert(0);
};
/* 
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
 
let result = (a + b < 4) ? 'мало' : 'много';
alert(`${result}`)

/* let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} 
let login = prompt('введите вашу должность :','');
let message = (login == 'Сотрудник') ? 'Привет' :
 (login == 'директор') ? 'Здравствуйте' :
 (login == '') ? 'Нет логина' : '';
alert(`${message}`);  
|| = or
&& = and
! = not
!! или (boolean) = приводит к логическому типу
Приоритет НЕ ! является наивысшим из всех логических 
операторов, поэтому он всегда выполняется первым, перед && или ||.
*/
/* let age = prompt('введите возраст :','');
if (age >= 14 && age <= 90) {
  alert('переменная age находится в диапазоне между 14 и 90 включительно.')
}else{
  alert('переменная age не находится в диапазоне между 14 и 90 включительно.')  
} */
/* let age = prompt('введите возраст :','');
if (!(age >= 14 && age <= 90)) {
  alert('переменная age не находится в диапазоне между 14 и 90 включительно.')
}else{
  alert('переменная age находится в диапазоне между 14 и 90 включительно.')  
} */
/* let age = prompt('введите возраст :','');
if (age < 14 || age > 90) {
  alert('переменная age не находится в диапазоне между 14 и 90 включительно.')
}else{
  alert('переменная age находится в диапазоне между 14 и 90 включительно.')  
} */
/* let login = prompt('введите логин :','')
  , password;
if (login == 'Админ') {
  password = prompt('введите пароль :','');
  if (password == 'Я главный') {
    alert('Здравствуйте!');
  }else if (password == '' || password == null) {
    alert('Отменено');  
  }else{
    alert('Неверный пароль')
  };
}else if (login == '' || login == null) {
  alert('Отменено');
}else{
  alert('Я вас не знаю');
}; */
/* for (let i = 0; i < array.length; i++) {
} - for in js */
/* outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}

alert('Готово!'); */
/* do {
  // тело цикла
} while (condition); */
/* while (condition) {
  // код
  // также называемый "телом цикла"
} */
/*
в js в for
Увеличение i++ выполняется отдельно от проверки условия (2)
, значение i при этом не используется, поэтому нет никакой 
разницы между i++ и ++i. */
/* for (let i = 2; i <= 10; i++) {
  if ((i % 2) == 0) {
    alert(i)
  }
  
} */
/* let i = 0;
while ( i < 3) {
  alert( `number ${i}!` );
  i++
} */
/* esc = null */
/* for (let i = 0;; i++) {
 i = prompt('введите число больше ста:','');
  if (i >= 100 || i == null) {
    break;
  };
} */
/* let n = prompt('введите ваше число :','');

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
} */
/* switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
} */
/* let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
 */
/* case можно группировать вот так 

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}*/
 /* как делать функции в js 
 
 function showMessage() {
  alert( 'Всем привет!' );

  и вызов функции в js 

  showMessage();
}*/
/* Переменные, объявленные внутри функции, видны только
 внутри этой функции.

У функции есть доступ к внешним переменным, 

Внешняя переменная используется, 
только если внутри функции нет такой локальной.
Если одноимённая переменная объявляется внутри функции,
тогда она перекрывает внешнюю. Например, в коде ниже функция
использует локальную переменную userName. Внешняя будет 
проигнорирована:

Мы можем передать внутрь функции любую информацию, используя 
параметры (также называемые аргументами функции).

return - для возврашения значении как и в php
*/
/* function min(a,b) {
  if (a > b) {
    return a;
  }else if (a < b) {
    return b;
  } else {
    return `они одинаковы : ${a} `;
  }
}u
let result = min(34,34);
alert(result); */
/* function pow(x,n) {
  let result = x;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}
let result = pow(3,3);
alert(result); */
/* Мы можем скопировать функцию в другую переменную:

function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет) */
/* Заметим, что мы могли бы использовать и Function Expression для того, чтобы создать sayHi в первой строке:

let sayHi = function() {
  alert( "Привет" );
};

let func = sayHi;
// ... */
/* Наша функция должна задать вопрос question и, в зависимости от того, как ответит пользователь, вызвать yes() или no():





function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
На практике подобные функции очень полезны. Основное отличие «реальной» функции ask от примера выше будет в том, что она использует более сложные способы взаимодействия с пользователем, чем простой вызов confirm. В браузерах такие функции обычно отображают красивые диалоговые окна. Но это уже другая история.

Аргументы функции ask ещё называют функциями-колбэками или просто колбэками.

Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно (от англ. «call back» – обратный вызов) когда-нибудь позже, если это будет необходимо. В нашем случае, showOk становится колбэком’ для ответа «yes», а showCancel – для ответа «no». */
/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */
/* function declaration - можно использовать в любом месте кода
function expresion - можно использовать только после написания */
/* let func = (arg1, arg2, ...argN) => expression = стрелочные функцииг */
/* function Accumulator(startingValue) {
  this.value = startingValue
  this.read =function(){
    this.value += +prompt('Введите число :','0');
  }; 
};
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */
/* function TemperatureCounter(data){
  this.data = ([]).concat(data);
  
  this.countTotal = function() {
    return this.data.reduce((acc, current) => (acc + current), 0);
  };
  
  this.pushItem = function(item) { 
    this.data.push(item);
    return this;
  };
  
  this.popItem = function() {
    return this.data.pop();
  };
  this.deleteItemByIndex = function(index) {
    return this.data.splice(index,1);
  };
}

let temps = new TemperatureCounter([1, 2, 3, 4, 5]);

temps.deleteItemByIndex(2);
console.log(temps.data) */

1158/5000
/* Когда мы сегодня вызываем файл JavaScript
, мы можем либо сразу загрузить его,
 либо загрузить его асинхронно, либо 
 отложить его загрузку, пока все остальное
не загрузится. Если мы загрузим его
сразу, HTML будет анализироваться до
тех пор, пока не встретит ссылку на
JavaScript, затем файл JavaScript 
будет загружен, выполнен, а затем
мы продолжим анализ HTML. Это 
блокировка рендера JavaScript.
Если мы загрузим наш файл JavaScript
асинхронно, добавив атрибут async, 
файл будет загружен вместе с HTML,
и блокировка рендеринга включится 
только при выполнении скрипта. Это
лучше и полезно в некоторых 
ситуациях. Если мы отложим 
выполнение сценария, загрузка
и выполнение файла, даже если на 
него есть ссылки в заголовке, 
происходит только тогда, когда все
остальное загружено. Так что в 
нашем случае простое добавление 
атрибута defer в конец нашей ссылки на 
скрипт решает нашу проблему. Двигаясь 
вперед, мы оставим ссылку на скрипт в 
голове и отложим или асинхронно загрузим 
его, чтобы убедиться, что все работает. 
Вы можете узнать больше о том, как HTTP / 2 
меняет практически все, что мы знаем о том,
как загружать и оптимизировать JavaScript,
 читая мой курс «Разработка для повышения
  производительности: HTTP / 2». */