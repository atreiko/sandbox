## Задание

Сверстать дмакет сайта в 3х разрешениях: 320px, 768px и 1200px, используя препроцессор SCSS и собирая проект с помощью менеджера задач Gulp. Дедлайн для выполнения данного домашнего задания - 1 неделя после четвертого занятия данного модуля.

#### Технические требования к верстке:

- Вам будет дан [макет](https://www.figma.com/file/OMxGUCGeJ18yGvPOL1awVQ/320px?node-id=0%3A1) сайта в трех разрешениях - 320 пикселей, 768 пикселей и 1200 пикселей.
- Верстка должена быть сделана с учетом принципов адаптивной верстки, то есть все блоки/колонки должны менять свое взаимное расположение когда разрешение экрана становится сликшом мало, чтобы они могли располагаться на одной линии. Общее правило: "Если блоки уже не могут располагаться рядом так, как на декстопной версии, то они должны становится так, как планшетной/мобильной версии макета".
- Для верстки вы должны использовать препроцессор SCSS с такими нюансами:
  - используйте самые распространенные инструменты препроцессоров: `переменные`, `миксины` и `&`;
  - разделите css-код вашего проекта на несколько отдельных scss-файлов по смыслу (например, переменные в один файл, миксины - в другой, стили для шапки сайта - в третий, и т.д.), то есть создайте структуру проекта, и объедините их с помощью инструкции `@import`.
- При разрешении экрана 768 пикселей или менее верхнее меню должно становиться выпадающим при клике на иконку меню в верхнем правом углу, как показано на версии макета `320px-dropdown_menu`.
- Секция с Инстаграм-фото - это <strong>необязательное</strong> задание (обратите внимание, что фото не становятся друг под друга при уменьшении экрана, а их становится больше, и на разрешениии 768 пикселей в названии секции появляется вторая надпись "GOT TO OUR INSTAGRAM PAGE").

#### Сборка проекта:

В качестве основы для проекта возьмите репозиторий с уже настроенной системой сборки https://github.com/cyberbiont/build-system-students/blob/master/gulpfile.js

#### Литература:

- [Gulp 4.0](https://andreyolegovich.ru/IT/gulp/)
- [Препроцессоры](https://dan-it.gitlab.io/fe-book/advanced_frontend/lesson10_preprocessors/preprocessors.html)
- [CSS3-медиазапросы](https://html5book.ru/css3-mediazaprosy/)