let juft_sonlar = ["juft sonlarga ajratilgan array"];

let arr = [2, 4, 9, 10, 45, 67, 8, 90];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    juft_sonlar.push(arr[i]);
  }
}

console.log(juft_sonlar);

let bosh_sonlar = ["boshlanishjdagi array"];

let array = [2, 4, 9, 10, 45, 67, 8, 90];
array.length;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 1 === 0) {
    bosh_sonlar.push(array[i]);
  }
}

console.log(bosh_sonlar);

// // Berilgan massiv
// let array = [2, 4, 9, 10, 45, 67, 8, 90];

// // Yangi bo'sh massiv yaratamiz
// let newArray = [];

// // For tsikli orqali massivni tekshiramiz va juft sonlarni yangi massivga qo'shamiz
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         newArray.push(array[i]);
//     }
// }

// // Natijani konsolga chiqaramiz
// console.log("Juft sonlar:", newArray);
