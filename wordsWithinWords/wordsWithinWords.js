/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

function nestedWordCount(words) {
  var counter = 0;
  var obj = {};

  for (var i = 0; i < words.length; i++) {
    counter = 0;
    for (var j = 0; j < words.length; j++) {
      if (words[i].includes(words[j])) {
        counter++;
      }
    }
    obj[counter] = words[i];
  }
  var array = Object.values(obj);
  return array[array.length - 1];
}
nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'