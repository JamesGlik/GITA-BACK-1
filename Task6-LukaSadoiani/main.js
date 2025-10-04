// 1) რა თანმიმდევრობით დაილოგება შემდეგი ინსტრუქციები: 
// console.log("1");
// setTimeout(() => console.log("2"), 100);
// setTimeout(() => console.log("3"), 0);
// Promise.resolve().then(() => console.log("4"));
// console.log("5");

//pasuxi: 1, 5, 4(radgan promise sruldeba settimeoutmde), 3, 2.



// 2) რა თანმიმდევრობით დაილოგება შემდეგი ინსტრუქციები: 
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => {
//   console.log("3");
//   setTimeout(() => console.log("4"), 0);
// });
// console.log("5");

//pasuxi 1, 5, 3, 2, 4.


// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

// await sleep(1000);


// function randomMatch(target) {
//   if (target < 1 || target > 20) {
//     console.log("შეზღუდვა: 1 დან 20 მდე რიცხვი");
//     return;
//   }

//   function generate() {
//     const randomNum = Math.floor(Math.random() * 20) + 1;
//     console.log(randomNum);

//     if (randomNum === target) {
//       console.log("წარმატებით დაემთხვა", target);
//     } else {
//       setTimeout(generate, 1000);
//     }
//   }

//   generate();
// }

// randomMatch(30);


// function countDown(start, duration) {
//   if (start < 0) {
//     console.log("გთხოვტ შეიყვანოთ რაოდენობა რომელიც მეტი იქნება ნულზე");
//     return;
//   }

//   const steps = start + 1;
//   const interval = duration / (steps - 1);

//   let current = start;

//   function step() {
//     console.log(current);
//     if (current === 0) return;

//     current--;
//     setTimeout(step, interval);
//   }

//   step();
// }

// countDown(10, 5000);
