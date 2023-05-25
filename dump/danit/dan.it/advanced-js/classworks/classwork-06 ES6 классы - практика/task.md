/\*

TASK 1

Напишите класс Пациент с такими параметрами:

-  ФИО;
-  дата рождения;
-  пол;

И на его основе создайте 2 расширенных класса:

1. ПациентКардиолога, с дополнительными параметрами:

-  среднее давление;
-  перенесенные проблемы с сердечно-сосудистой системой;

2. ПациентСтоматолога с дополнительными параметрами:

-  дата последнего визита;
-  текущее лечение; \*/

/\*

TASK 2

Возьмите код класса Modal и с его помощью создайте универсальных класс, который
отвечает за каркас всплывающего окна, и на его основе 2 других:

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

<button id="open-register-modal">Регистрация</button>
<button id="open-login-modal">Вход</button>

<style>
body {
font-family: Arial, Helvetica, sans-serif;
}


.modal {
display: none;
position: fixed;
z-index: 1;
padding-top: 100px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 200px;
overflow: auto;
background-color: rgb(0, 0, 0);
background-color: rgba(0, 0, 0, 0.4);
background-color: #fefefe;
padding: 20px;
border: 1px solid #888;
}

.modal.active {
display: block;
}

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

/\*

TASK 3

Напишите универсальный класс Input, который будет создавать однострочное поле
ввода. У него будут такие параметры: - тип (text, email, password, number, date,
submit и т.д.); - name; - обязательное поле или нет; - id; - классы; -
placeholder; - errorText - выводит текст ошибки, если поле обязательно к
заполнению и не было заполненно;

А также такие методы как:

-  render - возвращает HTML-разметку формы;
-  handleBlur - срабатывает, если поле обязательно к заполнению и не было
   заполнено.

Также напишите класс Form, который будет создавать HTML-форму, и у которого
будут такие параметры:

-  id;
-  классы;
-  action;

А также четыре метода:

-  render - который создает каркас формы и возвращает его;
-  handleSumbit - который отвечает за обработку отправки формы;
-  serialize, который все заполненые поля формы собирает в строку формата:
   "nameПоля=значениеПоля";
-  serializeJSON, который все заполненные поля формы собирает в объект, ключами
   которого будут значения name

\*/

/\*

TASK 4

Возьмите код из предыдущей задачи, и создайте два дочерних класса RegisterForm и
LoginForm.

1. RegisterForm:

-  метод render будет возращать форму с 4 полями ввода: Логин, email, Пароль и
   ПовторитеПароль. Для отрисовки полей используйте класс Input из предыдущего
   задания.
-  метод handleSumbit будет дополнительно проверять, совпадают ли пароли из
   полей Пароль и ПовторитеПароль.

2. LoginForm:

-  метод render будет возращать форму с 2 полями ввода: Логин/email и Пароль.
   Для отрисовки полей используйте класс Input из предыдущего задания.
-  метод handleSumbit будет проверять заполнены ли оба поля ввода.

\*/
