<!--
TASK 1

У вас есть 2 массива -
объедините их содержимое
в один warMachine максимально элегантным способом:


    const armodroms = ["Отравленный кинжал", "Золотой бог", "Гарганто", "Фламберг", "Рыцарь"];
    const airships = ["Золар Ауперкаль", "Казнь", "Вечный голод", "Покровитель"];
-->

<!--
Task 2

напишите функцию getPatientStatus, которая принимает в качестве аргумент рост в см и вес в кг пациента, и возвращает 2 параметра - индекс массы тела и степень ожирения. Степени ожирения при разном значении индекса массы тела (m / h*h):
- от 10 до 15 - анорексия;
- от 16 до 25 - норма;
- от 26 до 30 - лишний вес;
- от 31 до 35 - I степень;
- от 36 до 40 - II степень;
- от 41 и выше - III степень;

 Используйте лучшие правила создания модульного кода
 -->

<!--
Task 3
напишите функцию, которая создает объект.
В качестве аргументов она принимает в себя имя, фамилию, и перечень
строк формата "имяСвоства: значение". Их может быть много.

пример работы:
const user = createObject("Золар", "Аперкаль", "status: глава Юного клана Мескии", "wife: Иврейн");
console.log(user);
/*
user = {
    name: "Золар",
    lastName: "Аперкаль",
    status: "глава Юного клана Мескии",
    wife: "Иврейн"
}
*/

Используйте оператор rest и дестрктуризацию массива
-->

<!--
Task 4

 Напишите функцию createWarrior, которая принимает в себя большой объект
 с полями "name", "lastName", "weapon", "status", "vid",
 и создает и возвращает новый объект - warrior,
 с полями name, status и weapon.
 -->

<!--
TASK 5

        Напишите функцию, которая принимает в
        себя 2 объекта - резюме и вакансию,
         и возвращает процент совпадения требуемых навыков (скиллов).
        Навык совпадает если имя скилла совпадает с имененм
        в вакансии и и требуемый опыт <= опыту человека в этом навыке


        const resume = {
            name: "Илья",
            lastName: "Куликов",
            age: 29,
            city: "Киев",
            skills: [
                {
                    name: "Vanilla JS",
                    practice: 5
                },
                {
                    name: "ES6",
                    practice: 3
                },
                {
                    name: "React + Redux",
                    practice: 1
                },
                {
                    name: "HTML4",
                    practice: 6
                },
                {
                    name: "CSS2",
                    practice: 6
                }
            ]
        };


        const vacancy = {
            company: "SoftServe",
            location: "Киев",
            skills: [
                {
                    name: "Vanilla JS",
                    experience: 3
                },
                {
                    name: "ES6",
                    experience: 2
                },
                {
                    name: "React + Redux",
                    experience: 2
                },
                {
                    name: "HTML4",
                    experience: 2
                },
                {
                    name: "CSS2",
                    experience: 2
                },
                {
                    name: "HTML5",
                    experience: 2
                },
                {
                    name: "CSS3",
                    experience: 2
                },
                {
                    name: "AJAX",
                    experience: 2
                },
                {
                    name: "Webpack",
                    experience: 2
                }
            ]
        };
 -->

<!--
TASK 6


<menu id='menu' class="war-machine-list">
    <a href="#" class="war-machine">Отравленный кинжал</a>
    <a href="#" class="war-machine">Золотой бог</a>
    <a href="#" class="war-machine">Гарганто</a>
    <a href="#" class="war-machine">Фламберг</a>
    <a href="#" class="war-machine">Рыцарь</a>
    <a href="#" class="war-machine">Золар Ауперкаль</a>
    <a href="#" class="war-machine">Казнь</a>
    <a href="#" class="war-machine">Вечный голод</a>
    <a href="#" class="war-machine">Покровитель</a>
</menu>

<p id="war-machine-number"></p>
 При клике на тег с классом war-machine
выведите в p с id war-machine-number
номер элемента в списке меню, на который мы кликнули.
Используйте свежеполученные знания

 -->

<!--
TASK 7

    Напишите функцию, которая принимает
    в себя информацию об пользователе
    в виде объекта,
    среди параметров которого - поля age и wantLicense,
    и которая возвращает ответ -
    может ли человек получить
    в его возрасте желаемые права.
    Функция содержит в себе массив объектов,
    описывающий разные типы водительских прав.


    const user = {
        age: 21,
        name: "Алексей",
        lastName: "Михайлович",
        wantLicense: "B1"
    };
     const driverLicence = [{
            age: 16,
            type: "A1",
            time: 2
        }, {
            age: 16,
            type: "A2",
            time: 2
        },
            {
                age: 18,
                type: "B1",
                time: 6
            },
            {
                age: 18,
                type: "B",
                time: 4
            },
            {
                age: 19,
                type: "BE",
                time: 4
            },
            {
                age: 21,
                type: "D1",
                time: 3
            }
        ];
 -->
