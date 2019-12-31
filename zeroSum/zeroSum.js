/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

// I used a varible for loop and two if conditions, the first if to check for there are two numbers whose sum is zero, and the seconf if to loop recursively and slice the array in oreder to keep the time complicsity at O(n).

function zeroSum(numbers) {
	var check = numbers[0];

	for (var i = 1; i < numbers.length; i++) {
		if (check + numbers[i] === 0) {
			return true
		}
	}
	if (numbers.length === 0) {
		return false;
	}
		
	return zeroSum(numbers.slice(1))
}


zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
