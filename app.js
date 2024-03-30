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
