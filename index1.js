// function findLongestWord(string) {
//   // Change code below this line
//   const newArr = string.split(" ");
//   let longWord = '';
//   for (const word of newArr){
//     if(word.lenght > longWord.length){
//       longWord = word;
//     }
//     console.log(word.length)
//   }
//   ;
//   return longWord;
//   // Change code above this line
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');

// const arr = [1,2,3,4,5,6,7];
// const result = arr.concat([8854,9], [10,1231] )
// console.log(result);


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for(let i = 0; i < numbers.length; i+=1) {
//   if(numbers[i] % 2 === 0) {
//     total+=numbers[i];
//   }
// }

// console.log(total);

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

//("Лог перед вызовом fnA");
//("Лог внуртри функции fnA до вызова fnB")
//("Лог внутри функции fnB")
//("Лог внуртри функции fnA после вызова fnB")
//("Лог после вызова fnA")

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//   let totalPrice = 0;
//   for(const obj of products){
//     totalPrice = obj.price * obj.quantity;
//   }
//   console.log(totalPrice);

//   return totalPrice;

// }
// calculateTotalPrice("Radar")




// const firstBook = {
//   title: "Последнее королевство",
//     // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   title1: "123123"
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   a: nuyy = "ggg",
//   title1: title1
// } = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
// console.log(title1)



// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     this.potions = this.potions.filter(function(p){
//       return p !== potionName;
//     })

//     // console.log(a);
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion('Speed potion')

// console.log(atTheOldToad.potions);




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },


//   addPotion(newPotion) {
//     for(const potion of this.potions) {
//       if(potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       };
//     };
//     this.potions.push(newPotion);
//   },


//   removePotion(potionName) {
//     for(let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if(potion.name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName.name} is not in inventory!`;
//   },


//   updatePotionName(oldName, newName) {
//     for(let i = 0; i < this.potions.length; i += 1) {
//       if(this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       };
//     };
//     return `Potion ${oldName} is not in inventory!`;
//   },

//   // Change code above this line
// };


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     console.log(this.pizzas);
//     if(!this.pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     };
//     return onSuccess(pizzaName);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));

// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));

// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArr.push(element + value);
//     };
//   });
//   return newArr;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);



const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((acc, curr) => {
    return acc + curr.playtime / curr.gamesPlayed;
}, 0);
