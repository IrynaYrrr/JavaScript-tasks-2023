// Example 1 – Индекс массы тела



// Напиши функцию calcBMI(weight, height), которая рассчитывает и возвращает индекс массы тела человека.

// Для этого нужно разделить вес в килограммах на квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки.

// Не целые числа могут быть заданы в виде 24.7 или 24,7, т.е. в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;



// function calcBMI(weight, height) {
//   weight = Number(weight.replace(',', '.'));
//   height = Number(height.replace(',', '.'));

//   return Number((weight / height ** 2).toFixed(1));
//   // return Number(weight / Math.pow(height, 2)).toFixed(1);
// }

// const bmi = calcBMI('74,9', '1.68')
// console.log(bmi);
