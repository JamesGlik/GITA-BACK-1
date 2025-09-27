// function deleteProperty(obj, propName) {
//   const result = {};

//   for (let key in obj) {
//     if (key !== propName) {
//       result[key] = obj[key];
//     }
//   }

//   return result;
// }


// function generateLeaderboard(players) {
//   const sortedPlayers = players.slice();

//   sortedPlayers.sort(function(a, b) {
//     return b.score - a.score;
//   });

//   for (let i = 0; i < sortedPlayers.length; i++) {
//     sortedPlayers[i].rank = i + 1;
//   }

//   return sortedPlayers;
// }



// function getLongestTitleMovie(movies) {
//   let longest = movies[0];

//   for (let i = 1; i < movies.length; i++) {
//     if (movies[i].title.length > longest.title.length) {
//       longest = movies[i];
//     }
//   }

//   return longest;
// }



// function averageAgeByDepartment(employees) {
//   const hr = [];
//   const it = [];

//   for (let i = 0; i < employees.length; i++) {
//     if (employees[i].dept === "HR") {
//       hr.push(employees[i].age);
//     } else if (employees[i].dept === "IT") {
//       it.push(employees[i].age);
//     }
//   }

//   function average(arr) {
//     const sum = arr.reduce((a, b) => a + b, 0);
//     return Math.round(sum / arr.length);
//   }

//   return {
//     HR: average(hr),
//     IT: average(it)
//   };
// }


// function countWords(comments) {
//   let totalWords = 0;

//   for (let i = 0; i < comments.length; i++) {
//     const text = comments[i].comment.trim();

//     if (text !== "") {
//       const words = text.split(/\s+/);
//       totalWords += words.length;
//     }
//   }

//   return totalWords;
// }