'use strict'; // чтоб не расслабляться
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};

const student10 = new Student("Автандил", "парняга", 20);
const student20 = new Student("Полуэкт", "парняга", 23);
const student30 = new Student("Агрипина", "девушка", 21);
const student40 = new Student("Октавия", "девушка", 23);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) { // прототип метода добавления одной оценки в экземпляр student
  if (this.marks === undefined) { // проверка наличия свойства marks
    let marks = []; // определение(создание) массива для оценок
    this.marks = marks;
    marks.push(mark); // добавление первой оценки в пустой только что созданный массив оценок экземпляра student
  } else {
    let marks = [];
    marks.push(mark);// добавление оценки в конец массива оценок экземпляра student
  };
};

Student.prototype.addMarks = function (...rest) {  // прототип метода добавления нескольких оценок одновременно в экземпляр student
  if (this.marks === undefined) {
    //let marks = [];   !!!странно! почему компилятор не требует определения массива? На момент создания данного свойства в экземпляре student массива "marks" может ещё не быть....
    this.marks = marks;
    marks.push(...rest); // заполнение массива marks новыми элементами
  } else {
    marks.push(...rest); // дополнение массива marks новыми элементами в конец
  };
};

Student.prototype.getAverage = function () { // получение среднего арифметического массива marks в экземпляре student
  const average = marks.reduce((acc, item, idx, arr) => {
    acc += item;
    if (idx === arr.length - 1) {
      return acc / arr.length;
    } else return acc;
  })

return average; // вывод(возврат) среднего арифметического по запросу .getAverage
}

Student.prototype.exclude = function (reason) {
  delete this.subject; // удаление свойства subject из экземпляра student
  delete this.marks; // удаление свойства marks из экземпляра student
  this.excluded = reason;
};
