/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
	var start = 0;
	var end = 0;
	var result = [];

	if (string.length === 0) {
		return [ start, end ];
	}

	for (var i = 0; i < string.length; i++) {
		for (var j = i+1; j < string.length; j++) {
			if (string[i] === string[j]) {
				start = i;
				end = j;
			}
		}
			result.push([start, end]);
	}

	for (var i = 0; i < result.length; i++) {
		for (var j = i+1; j < result.length; j++) {
			if ((result[j][1] - result[j][0]) >= (result[i][1] - result[i][0]) ) {
				return result[j];
			}
		}
	}
}
longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]