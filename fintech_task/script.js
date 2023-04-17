// ########### TASK-01 FIZZBUZZ ----------------------------------
// input 3 ga bolinsa Fizz qaytadi
// input 5 ga bolinsa Buzz qaytadi
// input 3 ga ham 5 gam bolinsa FizzBuzz qaytadi
// input 3 ga ham 5 gam bolinmasa inputni ozi qaytadi
// input son bolmasa "son emas " qaytadi

// let input = parseInt(prompt("ixtiyoriy son kiriting"));
// console.log(input);

// function fizzBuzz(input) {
//   if (input !== "number") return "Son emas";
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }
// let res = fizzBuzz();
// console.log(res);

// ---------
//

// ########### TASK-02 Tezlik ----------------------------------

// Tezlik cheklovi ->70 km/soat
// 5 km/soat ->1 point
//  12 point ->Guvohnoma olib qoyiladi

// let SPEED_LIMIT = 70;
// let PER_POINT = 5;
// let MAX_POINTS = 12;
// let fizz = prompt("son kiriting");
// let buzz = checkSpeed(fizz);

// function checkSpeed(speed) {
//   if (speed < SPEED_LIMIT + PER_POINT) console.log("oke");
//   else {
//     const points = Math.floor((speed - SPEED_LIMIT) / PER_POINT);
//     if (points >= MAX_POINTS) {
//       console.log("Guvohnoma olib qo'yildi");
//     } else {
//       console.log(points);
//     }
//   }
// }

// ########### TASK-03 Tub sonlarni topish ----------------------------------

// showPrimeNumber(20);

// function showPrimeNumber(limit) {
//   for (let i = 2; i <= limit; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(i);
//   }
// }

// ########### TASK-1 Ekrandan ixtiyoriy son kiriting. Kiritilgan sondan boshlab shuncha marttaga kopayib ketsin. Misol uchun 5 kiritilsa 5dan boshlab 5-6-7-8-9-10 chiqishi kerak ##########

// var nums = prompt("Ixtiyoriy son kiriting");

// for (var i = nums; i <= nums * 2; i++) {
//   document.write(i + "<br/>");
// }

// ########## TASK-2 Ekrandan ixtiyoriy son kiriting. Kiritilgan sonlar orasida toq va juft sonlarga ajrating ##########

// var nums = prompt("Ixtiyoriy son kiriting");

// for (var i = 1; i <= nums; i++) {
//   if (i % 2 == 0) {
//     document.write(i + "-juft son" + "<br/>");
//   } else {
//     document.write(i + "-toq son" + "<br/>");
//   }
// }

// ########### TASK-3 Ekrandan ixtiyoriy son kiriting kiritilgan son ichida nechta bo'lunvchilari bor ##########

// var nums = prompt("Ixtiyoriy son kiriting"); // 12
// var res = "";
// var result = "";
// for (var i = 1; i <= nums; i++) {
//   if (nums % i == 0) {
//     res = res + i + " ";
//     result = result + 1;
//     console.log(i);
//   }
// }
// alert(
//   `Kiritilgan ${nums} sonida bo'linadigan sonlar ${result.length} ta bor. Bular: ${res} `
// );
// console.log(res);

// ########### TASK-4 Ekrandan ixtiyoriy son kiriting kiritilgan son ichida nechta 3ga bolinadigan sonlar borligini aniqlang ##########

// var nums = prompt("Ixtiyoriy son kiriting");
// var res = "";
// var drop = "";
// for (var i = 1; i <= nums; i++) {
//   if (i % 3 == 0) {
//     res = res + 1;
//     drop = drop + i + " ";
//   }
// }
// alert(
//   `Kiritilgan ${nums} sonida 3 ga bo'linadigan sonlar ${res.length} ta bor. Bular: ${drop} `
// );

// ########## TASK-5 ekrandan xoxlagan malumot kiriting. Kiritgan malumotizda harf va son alohida qilib massiv ichida harf va son degan object ochib ichiga joylashtirib bersin. Natija console.logda chiqishi kerak.

// var text = prompt("Ma'lumot kiriting");
// var arr = [];
// var obj = {
//   harf: "",
//   son: "",
// };

// for (var i = 0; i < text.length; i++) {
//   if (isNaN(text.charAt(i))) {
//     obj.harf = obj.harf + text.charAt(i);
//   } else {
//     obj.son = obj.son + text.charAt(i);
//   }
// }
// arr.push(obj);
// console.log(arr);

// let num=prompt("")

// ########## TASK-5 ekrandan xoxlagan malumot kiriting. Kiritgan malumotizda harf va son alohida qilib massiv ichida harf va son degan object ochib ichiga joylashtirib bersin. Natija console.logda chiqishi kerak.

let num1 = prompt("1 sonni kiritng");
let num2 = prompt("2 sonni kiritng");
let num3 = prompt("3 sonni kiritng");
let res = findOrdinalNumber(num1, num2, num3);
alert(res);

function findOrdinalNumber(a, b, c) {
  if (a == b) {
    return `${c} ning tartib raqami 3`;
  } else if (a == c) {
    return `${b} ning tartib raqami 2 `;
  } else if (b == c) {
    return `${a} ning tartib raqami 1`;
  } else {
    return "Raqamlarning hech biri bir biriga  mos kelmaydi!";
  }
}
