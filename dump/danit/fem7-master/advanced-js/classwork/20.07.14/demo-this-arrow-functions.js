/*
стрелочная функция не имеет своего this и поэтому В МОМЕНТ СВОЕГО СОЗДАНИЯ
заимствует this у функции, внутри которой она БЫЛА СОЗДАНА,
причем делает это раз и навсегда - а значит,
this внутри стрелочной функции всегда будет равен одному и тому же,
неважно, где и как она вызвана
*/

const isAdult = (age) => {
  console.log(this);
  /* функция isAdult создана с помощью функции общего потока,
  а значит this внутри нее всегда будет Window
  */
};

const person = {
  age: 18,
  getAge: () => {
    console.log(this);
    /*
      родительским по отношению к методу getAge является Window,
      а значит - this будет ссылаться на него
      */
  },
  showAge() {
    console.log(this); // this равен  person

    setTimeout(() => {
      console.log(this);
    }, 500);
    /* анонимная стрелочная функция внутри setTimeout была
      создана ВНУТРИ метода showAge в момент ее вызова.
      А значит заимствует у метода showAge ее this.
      А this у метода showAge ссылается на объект person
      */
  },
  scores: {
    biology: 13,
    mathematic: 8,
    history: 9,
    calcAverageScore() {
      const calcSum = () => {
        console.log(this);
      };
      /* функция calcSum была создана внутри calcAverageScore -
          а значит берет ее this.
          А ее this ссылается на объект scores
          */

      calcSum();
    },
  },
};
person.showAge();

isAdult();
person.getAge();
person.showAge();
person.scores.calcAverageScore();
