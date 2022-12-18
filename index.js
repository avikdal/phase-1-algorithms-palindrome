function isPalindrome(word) {
  let reverseWord = word.split("").reverse().join("")

  if(word === reverseWord){
    return true
  } else {
    return false
  }
}



/* 
  Add your pseudocode here
  
  split string into individual letters of an array
  reverse array
  join letters of reversed array back into string
  compare string and reversed sting
  if matching return true
  if not matching return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
