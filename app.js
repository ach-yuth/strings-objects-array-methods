//strings

//first answer
const greeting = "hello";

function greet(string) {
  return string.split("").reverse().join("");
}
console.log(greet(greeting));

//second answer

const scriptingLanguage = "javascript";
function consonants(string) {
  const withOutVowels = [];
  string.split("").forEach((letter) => {
    let vowels = ["a", "e", "i", "o", "u"];
    if (!vowels.includes(letter)) {
      return withOutVowels.push(letter);
    }
  });
  return withOutVowels.join("");
}
console.log(consonants(scriptingLanguage));

//third answer
const java = "programming";

function vowelsLength(string) {
  let num = 0;
  string.split("").forEach((letter) => {
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(letter)) {
      num++;
    }
  });
  return num;
}
console.log(vowelsLength(java));

//fivth answer
const title = "the quick brown fox";
function longestWord(string) {
  let wordsLength = [];
  string.split(" ").forEach((word) => {
    wordsLength.push(word.length);
  });
  let maxValue = Math.max(...wordsLength);
  let maxindex = wordsLength.indexOf(maxValue);
  return string.split(" ")[maxindex];
}
console.log(longestWord(title));

// sixth answer
const greets = "hello world";

function greetings(string) {
  const letter = string.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return letter.join(" ");
}
console.log(greetings(greets));

//seventh answer
const greetingAPerson = "hello";

function repeatedLetter(string, letters) {
  let repeatingLettersCount = 0;
  string.split("").forEach((letter) => {
    if (letters.includes(letter)) {
      repeatingLettersCount++;
    }
  });
  return repeatingLettersCount;
}
console.log(repeatedLetter(greetingAPerson, "l"));

//objects

//eight answer
const data = { a: 1, b: 2, c: 3 };

function gettingStringFromKeyNames(obj) {
  let strings = [];
  for (const data in obj) {
    strings.push(data);
  }
  return strings;
}
console.log(gettingStringFromKeyNames(data));

//ninth answer
const items = { a: 1, b: 2, c: 3 };

function gettingStringFromKeyValues(obj) {
  let strings = [];
  for (const data in obj) {
    strings.push(obj[data]);
  }
  return strings;
}
console.log(gettingStringFromKeyValues(items));

//tenth answer

const list1 = { a: 1, b: 2 };
const list2 = { c: 3, d: 4, e: 8 };

function flattenArray(data1, data2) {
  return { ...data1, ...data2 };
}
console.log(flattenArray(list1, list2));

//13th answer

const data1 = { a: 1, b: 2, c: 3 };

function dataProperties(item) {
  let count = 0;
  for (const data in item) {
    if (data) {
      count++;
    }
  }
  return count;
}
console.log(dataProperties(data1));

//14th answer
const numsArray = [1, -2, 3, -4, 5];

function positiveNums(numbers) {
  let numCount = 0;
  numbers.filter((number) => {
    if (number > 0) {
      numCount = number + numCount;
    }
  });
  return numCount;
}
console.log(positiveNums(numsArray));

//15th answer

const normalGreets = ["hello", " ", "world"];
function greet1(greeting) {
  return greeting.join("");
}
console.log(greet1(normalGreets));

//16th answer
const nums = [1, 2, 3, 4, 5];

function averageOfNums(nums) {
  let numsAvg = 0;
  nums.forEach((num) => {
    numsAvg = num + numsAvg;
  });
  return numsAvg / nums.length;
}
console.log(averageOfNums(nums));

//17th answer
const mens = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 35 },
];

function adultPerson(persons) {
  let age = 0;
  persons.forEach((person) => {
    if (age < person.age) {
      age = person.age;
    }
  });
  const filteredperson = persons.filter((person) => {
    if (age === person.age) {
      return person;
    }
  });
  return filteredperson;
}
console.log(adultPerson(mens)[0]);

//18th answer
const numArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function flatArray(numbersarray) {
  const flatArray = [];
  numbersarray.forEach((num) => {
    num.forEach((value) => {
      flatArray.push(value);
    });
  });
  return flatArray;
}
console.log(flatArray(numArray));

//19th answer
const numbers = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(nums) {
  const unique = [];
  nums.forEach((num) => {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  });
  return unique;
}
console.log(removeDuplicates(numbers));

//20 answer

const fruitsArray = ["banana", "apple", "orange"];

function sortingInalphabetical(fruits) {
  return fruits.sort();
}
console.log(sortingInalphabetical(fruitsArray));

//21st answer
const nums1 = [2, 3, 4];

function productOfNums(nums) {
  let product = 1;
  nums.forEach((num) => {
    product = num * product;
  });
  return product;
}
console.log(productOfNums(nums1));

//longest fruit

const fruits = ["apple", "banana", "orange", "kiwi"];
function longestFruit(fruits) {
  const fruitsLength = fruits.map((fruit) => {
    return fruit.length;
  });
  const maxNumber = Math.max(...fruitsLength);
  const maxIndex = fruitsLength.indexOf(maxNumber);
  return fruits[maxIndex];
}
console.log(longestFruit(fruits));

const fruis = ["apple", "banana", "orange", "kiwi"];

function fruitsWithMoreThanTwoVowels(fruits) {
  let numOfFruits = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  fruits.forEach((fruit) => {
    let noOfVowels = 0;
    fruit.split("").forEach((letter) => {
      if (vowels.includes(letter)) {
        noOfVowels = noOfVowels + 1;
      }
      return noOfVowels;
    });
    if (noOfVowels >= 3) {
      return (numOfFruits = numOfFruits + 1);
    }
  });
  return numOfFruits;
}
console.log(fruitsWithMoreThanTwoVowels(fruis));

//fruit which has more vowels in it
const data2 = ["apple", "banana", "custardapple", "orange"];

function fruitWithMaxVowels(fruits) {
  const vowels = ["a", "e", "i", "o", "u"];
  const length = fruits.map((fruit) => {
    const fruitsLength = fruit.split("").map((letter) => {
      if (vowels.includes(letter)) {
        return letter;
      }
    });
    return fruitsLength.join("").length;
  });
  let maxValue = Math.max(...length);
  let maxIndex = length.indexOf(maxValue);
  return fruits[maxIndex];
}
console.log(fruitWithMaxVowels(data2));

//key Names & Values swapping
const person = { a: 1, b: 2, c: 3 };
function getData(data) {
  const swappedObj = {};
  for (const list in data) {
    const value = data[list];
    swappedObj[value] = list;
  }
  return swappedObj;
}
console.log(getData(person));

const myColor = ["Red", "Green", "White", "Black"];
function mixtureOfColors(colors) {
  return colors.toString();
}
console.log(mixtureOfColors(myColor));

//power of two
function poweOftWO(n) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Math.pow(2, i));
  }
  return numbers;
}
console.log(poweOftWO(5));

//odd numbers
function oddNums(n) {
  const nums = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 1) {
      nums.push(i);
    }
  }
  return nums;
}
console.log(oddNums(10));

const arrayItems = ["apple", "banana", "watermelon", "kiwi"];

const ba = arrayItems.push("pineapple");

console.log(ba); // it just returns the length of an  array

let a = 10;
let b = a + 5;
console.log(b);
