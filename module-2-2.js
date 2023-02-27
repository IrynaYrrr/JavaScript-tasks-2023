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



// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example 2 – Наименьшее из чисел



// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.



// function min(a, b) {
//   if(a < b){
//     return a;
//   }
//   return b;
// }

// console.log(min(5, -10));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//   const totalPrice = 0;
//   for(const obj of products){
//     totalPrice = obj[price] * obj[quantity];
//   }
//   console.log(obj.price);
//   // return totalPrice;
// }
