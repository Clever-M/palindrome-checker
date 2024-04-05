const checkBtn = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");
const resultText = document.createElement('p');


checkBtn.onclick = palindromeChecker;

function palindromeChecker() {
  if(!textInput.value){
    alert("Please input a value");
  } else {
    resultText.innerText = isPalindrome(textInput.value) ?
      `${textInput.value} is a palindrome`:
      `${textInput.value} is not a palindrome`;
    result.append(resultText);
  }
}

function isPalindrome(word) {
  word = cleanString(word.toLowerCase());
  return word === reverseWord(word);
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}

function cleanString(word) {
  return word.replace(/\W+|\_/g, '')
}