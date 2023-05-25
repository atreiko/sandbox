// В данной работе, я не проверяла валидность введенных данных по двум причинам:
//     - в ТЗ этого не требовалось;
//     - насыщенность  входящей информации очень велика, мне катастрофически не хватает времени 
//         на освоение нового материалла и отработки прошедшего!!! 
//         Если потребность проверки на валидность возникнет, не вопрос, будет сделано))) 


"use strict";

const student = {};

let studentFirstName = prompt("Введите Ваше имя", "Мирослава");
let studentLastName = prompt("Введите Вашу фамилию", "Рыженкова");

student.name = studentFirstName;
student.surname = studentLastName;

let tabel = {};

student.tabel = tabel;


if (studentFirstName && studentLastName) {
    let subjectName;
    let subjectGrade;

    do {
        subjectName = prompt("Введите название предмета", "Математика");
        if (!subjectName) {
            break;
        }
        subjectGrade = +prompt("Введите оценку по данному предмету", "1-12");
        tabel[subjectName] = subjectGrade;
    } while (subjectName);


    if (!subjectName && !subjectGrade) {
        console.log("Заполните, пожалуйста, табель")
    } else {
        let badGrades = false;

        for (let key in student.tabel) {
            if (student.tabel[key] < 4) {
                badGrades = true;
                break;
            }
        }

        if (!badGrades) {
            console.log("Студент переведен на следующий курс");
            let averageGrade = 0;
            let courseCont = 0;

            for (let key in student.tabel) {
                courseCont++;
                averageGrade += student.tabel[key];
            }

            averageGrade = averageGrade / courseCont;

            if (averageGrade > 7) {
                console.log("Студенту назначена стипендия.");
            }
        } else {
            console.log("Студенту назначена пересдача.");
        }
    }
}

console.log(student);