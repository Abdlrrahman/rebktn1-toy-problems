// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function arrayCeption(array, count) {
	var count = count || 0;

		for (var i = 0; i < array.length; i++) {
			if (array[i].length !== 0) {
				return arrayCeption(array[i], count + 1)
			}
			if (array[i].length === 0) {
				count = 0;
			}
		}
	return count;
}

arrayCeption([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ])
arrayCeption([ [ 5 ], [ [ ] ] ])
arrayCeption([ 10, 20, 30, 40 ])
arrayCeption([ ])
arrayCeption([ [ [ ] ] ])