/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(array) {
	var check;
	var counter = 0;

	for (var i = 0; i < array.length; i++) {
		check = array[i];
		counter = 0
		for (var j = 0; j < array.length; j++) {
			if (JSON.stringify(array[j]) === JSON.stringify(check)) {
				counter++;
			}
		}
		if (counter % 2 === 0) {
			return check;
		}
	}
	return null;
}

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2

evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"

evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]

evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}