function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Split the word into an array of letters
  - Reverse the array
  - Join it back into a string
  - Compare to the original word
  - Return true if they match, false otherwise
*/

/*
  Explanation:
  If the word is the same forwards and backwards,
  then it is a palindrome. So we reverse it and check.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
