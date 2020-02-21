/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1

editDistance("wednesday", "sunday") // 5

editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/

function editDistance(str1, str2) {
    var obj = {};
    var checker = str1.length;
    var counter = 0;
    // debugger

    for (var i = 0; i < str2.length; i++) {
        obj[str2[i]] = str2[i];
    }
    for (var i = 0; i < str1.length; i++) {
        if (checker !== str2.length) {
            if (!obj[str1[i]]) {
                checker --;
                counter++;
            }
        }
        else {
            console.log(obj[str1[i]] , obj[str2[i]])
            if (obj[str1[i]] !== obj[str2[i]]) {
                str1[i] = str2[i];
                counter++;
            }
        }
    }

    return counter;
}