<!-- Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования -->

Начну с того, что строка - это последовательность символов, а символы могут быть любыми — буквы, цифры, знаки препинания и прочее. Главное, чтобы при создании строки вся последовательность заключалась в кавычки. Но если вдруг нам нужно создать в нашей строке, к примеру, название нашей любимой книги. Естественно, что при введении названия этой книги, мы будем "заключать" ее в кавычки). Но вот тут возникае проблема - компилятор чем то недоволен! А "ругается" он по той причине, что он воспринимает кавычки строго определенным образом, а именно — оборачивает в них строку. И каждый раз, когда он видит символ ", он ожидает, что для него далее будет следовать такой же символ, а между ними будет находиться текст строки, которую он, должен создать. 

В нашем же случае кавычки вокруг нашей любимой книги находятся внутри других кавычек. И когда компилятор доходит до этого куска текста, он просто не понимает, что от него хотят. Вроде как стоит кавычка, а значит, он должен создать строку. Но ведь он уже это делает! 

Нам нужно объяснить компилятору, когда кавычка является для него командой ("создай строку!"), а когда она является простым символом ("выведи на экран слово "название книги" вместе с кавычками!").

Для этого в программировании используется экранирование символов и осуществляется с помощью специального символа \, который в обычной жизни называется "обратный слэш".
    