// function arithmeticMean(array){

//     let splited = array.slice()
    
//     let sum = 0;

//     for(let i = 0; i < splited.length; i++){
//         sum += splited[i];
//     }

//     let mean = sum / splited.length;
//     console.log(mean);
// }

// arithmeticMean([5,10,15])


// function reversed(numbers){
//     let digits = numbers.split("");
//     digits.reverse();

//     let reversedNumbers = [];

//     for(let i = 0; i < digits.length; i++){
//         reversedNumbers.push(Number(digits[i]));
//     }
//     console.log(reversedNumbers);
// }

// reversed("12345")



// function sameNUmbers(a, b) {
//     let result = [];

//     for(let i = 0; i < a.length; i++) {
//         let item = a[i];
//         if (!b.includes(item)) {
//             result.push(item);
//         }
//         console.log(result)
//     }
// }

// let a = [1, 2];
// let b = [1];
// sameNUmbers(a, b);


// function findPalindromes(words) {
//     let palindromes = [];

//     for(let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let reversed = word.split('').reverse().join('');
        
//         if (word === reversed) {
//             palindromes.push(word);
//         }
//     }

//     return palindromes;
// }

// console.log(findPalindromes(["mom", "car", "level", "dog"]));


// function mostFrequentNumber(arr) {
//     const frequency = {};
//     let mostFrequent = null;
//     let highestCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if (frequency[num]) {
//             frequency[num]++;
//         } else {
//             frequency[num] = 1;
//         }

//         if (frequency[num] > highestCount) {
//             highestCount = frequency[num];
//             mostFrequent = num;
//         }
//     }

//     return Number(mostFrequent);
// }

// console.log(mostFrequentNumber([4, 5, 6, 5, 4, 5]));


// function findSecondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = -Infinity;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] < largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// const array = [10, 40, 20, 5, 30];
// const secondLargest = findSecondLargest(array);
// console.log("Second largest element:", secondLargest);