## Задание

Сверстать макет [psd](./Forkio_1200.psd) 

Есть в формате ПСД (в папке рядом), в фигма - [ https://www.figma.com/file/8TlSdTK6GHiBx8r01bPAVx/Forkio?node-id=0%3A2 ](https://www.figma.com/file/8TlSdTK6GHiBx8r01bPAVx/Forkio?node-id=0%3A2)

#### Командная работа
На данном проекте все студенты разделены на группы по два человека. Для каждого из участников команды определен перечень заданий, которые он должен выполнить. Участники команды могут самостоятельно решить, кто будет выпонять задание №1, а кто - задание №2.

#### Технические требования к верстке:

 - Вам будет дан макет в трех разрешениях - [320 пикселей](./Forkio_320.psd), [768 пикселей](./Forkio_768.psd), и [1200 пикселей](./Forkio_1200.psd) (ширина контента). 
 - Макет должен быть сделан с учетом принципов адаптивной и резиновой верстки. То есть все блоки/колонки должны занимать всю доступную ширину экрана (с учетом боковых отступов), и менять свое взаимное расположение при изменении пропорций после определенных граничных точек. 
 - Макет шириной `320` пикселей показывает как будет выглядеть контент при ширине экрана от `320` до `480` (!) пикселей (320 пикселей - минимальная ширина контента, больше он не должен сужаться).
 - Макет `768` пикселей показывает как будет выглядеть контент при размере экрана от 481 до 992 (!) пикселей. 
 - Макет `1200` показывает как будет выглядеть контент при ширине экрана 993-1200 пикселей. То есть там где в макете 768 где-то было две колонки, а в макете 1200 четыре, смена с двух на четыре должна происходить при достижении ширины экрана 993 пикселя. 
 - Если экран шире чем 1200 пикселей, контент должен занимать ровно 1200 пикселей, и находиться по центру.
 - У контейнера с контентом должен быть боковой `padding` - 10 пикселей с обоих сторон, на всех разрешениях экрана.
 - Верстка должна выглядеть хорошо как в указанных граничных точках, так и на любой ширине экрана между ними.
 - Есть два дополнительных макета - [Forkio Hover](./Forkio_hover.psd) и [Forkio Dropdown Menu](./Forkio_320_dropdown_menu.psd). `Hover` показывает как должны выглядеть все элементы при наведении курсора мыши. `Menu` - показывает как должно выглядеть верхнее меню на мобильных устройствах (при ширине до 480 пикселей включительно). Открываться оно должно при наведении курсора мыши.
 - Все стили должны быть написаны в файлах SCSS

#### Задание для студента №1
 - Сверстать шапку сайта с верхним меню (включая выпадающее меню при малом разрешении экрана). 
 - Сверстать секцию `People Are Talking About Fork`.

#### Задание для студента №2

 - Сверстать блок `Revolutionary Editor`. Кнопки `watch`/`star`/`fork` на макете сделаны одним слоем, поэтому с макета не получится скачать иконки. Сами кнопки надо сделать, чтобы выглядели как [здесь](https://github.com/baxterthehacker/public-repo) справа вверху (оттуда же с помощью инспектора можно взять все SVG иконки и скачать используемые на гитхабе стили).
 - Светстать секцию `Here is what you get`.
 - Сверстать секцию `Fork Subscription Pricing`. В блоке с прайсингом третий элемент всегда будет "выделен" и будет больше других (то есть не по клику/ховеру, а статически).

#### Общее задание для команды:
 - Создать файл [README.MD](https://dan-it.gitlab.io/fe-book/teamwork/readme.html) в корне проекта. Указать в файле коротко информацию о проекте:
   - Список использованных технологий
   - Состав участников проекта
   - Какие задачи выполнял кто из участников
 - Код обоих участников команды должен находиться в одном репозитории.
 - Настроить сборку проекта с помощью сборщика `Gulp` (см. требования ниже).
 - Разместить проект в интернете с помощью [Github pages](https://pages.github.com/) (не забудьте потом добавить ссылку в резюме).

#### Сборка проекта:
 - Проект должен собираться с помощью сборщика `Gulp`

 - В корне проекта должно быть две папки - `src` и `dist`, а также файл `index.html` 

 - Стили и скрипт в `index.html` должны быть подключены из папки `dist`

 - Папка `src` должна содержать все рабочие файлы, в которых вы будете писать код (папки styles, `js`, `img`)

 - Содержимое папки `dist` должно генерироваться автоматически путем преобразования и копирования файлов, которые находятся в папке `src`

 - используйте плагин gulp-sourcemaps для сохранения ссылок на оригинальные js и css файлы (source maps)

 - Объединенное рабочее задание `build` (оно же должно быть дефолтным и запускаться  помощью команды gulp) должно включать следующие подзадания:
   - очистка папки `dist`
   
   - компиляция `scss / sass` файлов в  файл  `styles.min.css` в папке `dist/styles`
   
   - конкатенация `js` файлов в один файл `script.min.js`  в папке  `dist/js`
   
   - оптимизация картинок и копирование их в папку `dist`
   
   - Запуск сервера и последующее отслеживание изменений в`*.js`, `*.scss`, `*.sass`, `*.jpg`, `*.png`, `*.html` файлов в папке `src`
   
   - При изменении - перезапуск соответствующих тасков `gulp` для каждого типа файлов и обновление страницы
   
   - При запуске таска `build` с флагом  `-p` должна происходить минификация js файлов (используйте пакет `yargs` , плагины `gulp-if` и `gulp-terser`)
   
   	

#### Необязательные задания продвинутой сложности:

 - Использовать плагин `gulp-load-plugins` для загрузки всех плагинов (пакетов, имена которых начинаются с `gulp`)
 - Использовать плагин gulp-postcss при production-билде (autoprefixer)

#### Еще более продвинутая сложность:

 - Настроить обработку ошибок, чтобы при ошибках в любой из задач (например, ошибка компиляции `scss` в `css`) процесс не завершался, а ошибка выводилась в консоль и на экран браузера

#### Мега-продвинутая сложность:

 - Сделать аналогичную сборку на [Webpack](https://learn.javascript.ru/screencast/webpack) вместо Gulp

#### Полезные ссылки:
 - [Работа в команде на Step проекте](https://dan-it.gitlab.io/fe-book/teamwork/step.html)

#### Удачи!