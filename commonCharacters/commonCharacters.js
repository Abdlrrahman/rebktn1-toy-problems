/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// I tried to solve it using two for loops and an if condition to check for the common characters and add hem to a new string varible and then return it.


var commonCharacters = function(string1, string2) {
  var check = '';
  for (var i = 0; i < string1.length; i++) {
  	for (var j = 0; j < string2.length; j++) {
  	if (string1[i] === string2[j]) {
  		check += string1[i];
  	}
  }
  }
  return check;
};

commonCharacters('acexivou', 'aegihobu');