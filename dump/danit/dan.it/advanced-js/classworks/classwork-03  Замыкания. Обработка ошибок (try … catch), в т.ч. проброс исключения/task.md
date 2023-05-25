/\*

    <p id="text" style="font-size: 14px; color: red">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dolores expedita natus omnis. Accusamus assumenda error incidunt maxime nisi. Culpa fugit itaque labore laudantium molestias nam nesciunt repellat totam.</p>
    <button id="increase-text">Увеличить</button>
    <button id="decrease-text">Уменьшить</button>

    Напишите функцию changeTextSize, у которой будут такие аргументы:

1. Ссылка на DOM-элемент, размер текста которого нужно изменить без регистрации
   и sms.
2. Величина в px, на которую нужно изменить текст, возвращает функцию, меняющую
   размер текста на заданную величину.

С помощью этой функции создайте две:

-  одна увеличивает текст на 2px от изначального;
-  вторая - уменьшает на 3px.

После чего повесьте полученнные функции в качестве обработчиков на кнопки с
id="increase-text" и id="decrease-text". \*/

/\*

Напишите функцию createProduct, которая будет создавать объекты, описывающие
товары. У товара должны быть такие свойства:

-  name;
-  fullName;
-  article;
-  price. При этом при попытке напрямую (через точку) изменить свойство price
   происходит его его проверка на прравильность: цена должна быть целым
   положительным числом. Если эти требования нарушаются - присвоения не
   произойдет. Создавать его аналог через \_price нельзя.

Пример работы: const notebook = createProduct("lenovo X120S", "lenovo X120S
(432-44) W", 3332, 23244); console.log(notebook.price);// выведет 23244
notebook.price = -4; // присвоение не произойдет console.log(notebook.price);//
выведет 23244 notebook.price = 22000; console.log(notebook.price);// выведет
22000

\*/

/\*

Создайте объект Slider, который будет получать такие аргументы:

-  эффект прокрутки
-  скорость прокрутки
-  автостарт (да/нет)
-  список слайдов (в виде массива объектов)

И методами:

-  добавить слайд
-  удалить слайд
-  получить слайд

Все возможные на ваш взгляд проблемы оберните в конструкции try ... catch

\*/

/\*

<input id="email" type="email" placeholder="Email here">
<input id="phone" type="text" placeholder="Phone number here">
<input id="passport" type="text" placeholder="Passport code here">
<p id="error-message"></p>

Создайте объект Validation, который будет иметь такие методы:

-  проверка правильности ввода email
-  проверка правильности ввода мобильного телефона
-  проверка правильности ввода паспорта (первые два символа - буквы, потом -
   цифры)

Сделайте так, чтобы проверка происходила в момент нажатия клавиши, и ненужные
символы не появлялись в поле ввода вообще.

    */
