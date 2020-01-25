/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
  var numbers = {
    0:'0',
    1:'1',
    2:'ABC',
    3:'DEF',
    4:'GHI',
    5:'JKL',
    6:'MNO',
    7:'PQRS',
    8:'TUV',
    9:'WXYZ'
  };
  // var letters = ['0', '1', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var result = '';

  for (var i = 0; i < digitString.length; i++) {
    var temp = Object.values(numbers[digitString[i]])
    console.log(temp)
    result+=temp
  //   for (var j = 0; j < temp.length; j++) {
  //     if (digitString[i] === 0) {
  //       result+='0'
  //     }
  //     if (digitString[i] === 1) {
  //       result+='1'
  //     }
  //     if (digitString[i] === 2) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 3) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 4) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 5) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 6) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 7) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 8) {
  //       result+=temp[temp[j]]
  //     }
  //     if (digitString[i] === 9) {
  //       result+=temp[temp[j]]
  //     }
  //   }
  //   final.push(result);
  //   result = '';
   }
  return [result];
}


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]