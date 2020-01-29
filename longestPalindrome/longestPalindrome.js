/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  var str = [];
  str = string.split("");
  var result = [];
  var temp = "";

  for (var i = 0; i < str.length; i++) {
      for (var j = str.length - 1; j > 0; j--) {
        if (str[i] === str[j]) {
          for (var k = i; k <= j; k++) {
            temp += string[k]
          }
        }
      }
      if (temp.length > 2) {
        result.push(temp)
      }
      temp = "";
  }
  for (var i = 0; i < result.length; i++) {
    console.log(result[i])
    if (string.includes(result[i])) {
      return result[i]
    }
  }
  return null
}
longestPalindrome("My dad is a racecar athlete")