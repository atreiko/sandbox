    /*

    TASK 1

    Напишите класс User, который будет использоваться для создание объекта,
    описывающиго пользователя панели администрирования сайта.
    У объекта должны быть такие поля:
    - role;
    - login;
    - email;
    - password;

    а также метод:
    - isValidEmail - проверят, является ли переданная строка email'ом
    (в ней должен быть символ @, минимум 1 точка и не должно быть пробелов);

    */

        /*

        TASK 2

Возьмите код из предыдущего примера и добавьте ему такие сеттеры и геттеры: -
role (можно установить роль только из списка: super admin, admin, main manager,
content manager); - login (не меньше трех букв);

    А также добавьте метод getPasswordStrength, который проверяет силу пароля. Метод получает строку (пароль) и возвращает один из трех вариантов:
    - weak - меньше 6 символов, не содержимт букв или цифр;
    - medium - больше 6 символов, содержит цифры и буквы, но не содержит знаков: -_^$%#@*&?
    - strong - больше 6 символов, содержит буквы, цифры и спецсимволы: -_^$%#@*&?
    */

/\*

TASK 3

    Задание: напишите класс, создающий объект, описывающий кнопку.
    Класс должно получать такие параметры:
    - текст кнопки;
    - id кнопки есть нужно;
    - список классов кнопки (в виде массива строк);
    - название класса, который добавляет кнопке при первом клике и убирается при повторном;

    У объекта должен быть метод render, который возвращает DOM-элемент, описывающий кнопку, в таком виде:
    <button class="object.classList">object.buttonText</button>

    Также у объекта должен быть метод handleClick, который будет
    привязан к событию "click" на кнопке, и будет устанавливать ей
    активный класс если его нет и убирать его - если он есть.

    В качестве аргумента класс будет принимать объект с параметрами.


    <style>
        .btn {
            display: inline-block;
            font-weight: 400;
            text-align: center;
            cursor: pointer;
            padding: .375rem .75rem;
            font-size: 1rem;
            border-radius: .25rem;
            border: 1px solid transparent;
        }

        .btn-primary {
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }

        .btn-primary.active {
            color: #007bff;
            background-color: #fff;
        }

    </style>
    */

/\*

TASK 4

Задание: напишите класс Modal, который будет создавать объект, описывающий
всплывающее окно. Параметры объекта: - id всплывающего окна; - классы
всплывающего окна; - текст внутри тега p;

    У объекта должно быть 3 метода:
    render, который возвращает DOM-элемент всплывающего окна с такой разметкой:

    <div id="idОкна" class="классыОкна">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>ТекстОкна</p>
        </div>
    </div>

     openModal, который открывает окно (его нужно использовать как обработчик click для button с id="myBtn");
     closeModal - который закрывает окно при клике на крестик (span с классом close) внутри окна

   <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        /* The Modal (background) */
        .modal {
            display: none;
            /* Hidden by default */
            position: fixed;
            /* Stay in place */
            z-index: 1;
            /* Sit on top */
            padding-top: 100px;
            /* Location of the box */
            left: 0;
            top: 0;
            width: 100%;
            /* Full width */
            height: 100%;
            /* Full height */
            overflow: auto;
            /* Enable scroll if needed */
            background-color: rgb(0, 0, 0);
            /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4);
            /* Black w/ opacity */
        }

        .modal.active {
            display: block;
        }

        /* Modal Content */
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        /* The Close Button */
        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }

    </style>

    <div id="root"></div>
    <button id="myBtn">Open Modal</button>

    */


     /*

     TASK 5

     Возьмите код из предыдущей задачи и создайте один универсальных класс, который отвечает за каркас всплывающего окна, и на его основе 2 других:

1. Вплывающее окно с формой регистрации. Его HTML-разметка будет выглядть так:
<div id="idОкна" class="классыОкна">
     <div class="modal-content">
         <span class="close">&times;</span>
         <form action="" id="register-form">
             <input type="text" name="login" placeholder="Ваш логин" required>
             <input type="email" name="email" placeholder="Ваш email" required>
             <input type="password" name="password" placeholder="Ваш пароль" required>
             <input type="password" name="repeat-password" placeholder="Повторите пароль" required>
             <input type="submit" value="Регистрация">
         </form>          
     </div>
 </div>
2. Всплывающее окно с формой авторизации. Его HTML-разметка:
   <div id="idОкна" class="классыОкна">
        <div class="modal-content">
            <span class="close">&times;</span>
            <form action="" id="register-form">
                <input type="text" name="login" placeholder="Ваш логин или email" required>
                <input type="password" name="password" placeholder="Ваш пароль" required>
                <input type="submit" value="Вход">
            </form>          
        </div>
    </div>   
    
     Привяжите открытие первого окна к кнопке Регистрация, а второго - к кнопке Вход

     <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
   
        /* The Modal (background) */
        .modal {
            display: none;
            /* Hidden by default */
            position: fixed;
            /* Stay in place */
            z-index: 1;
            /* Sit on top */
            padding-top: 100px;
            /* Location of the box */
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            /* Full width */
            /*height: 100px;*/
            /* Full height */
            overflow: auto;
            /* Enable scroll if needed */
            background-color: rgb(0, 0, 0);
            /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4);
            /* Black w/ opacity */
            background-color: #fefefe;
            padding: 20px;
            border: 1px solid #888;
   
        }
   
        .modal.active {
            display: block;
        }
   
        /* The Close Button */
        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
   
        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
   
   
    </style>

\*/
