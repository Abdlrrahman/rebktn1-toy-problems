// Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). 
// You may use the parseInt function that takes in just one argument.

// Examples
// Input	Output
// n: "0"	 0
// n: "1"	 1
// n:"10"	 2
// n:"11"	 3
// n:"100"	 4
// n:"101"	 5
// n:"110"	 6
// n:"111"	 7
// n:"1000"	 8 



function binaryToDecimal(n) {
    result = 0
    var array = n.split('');
    array = array.reverse();

    for (var i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            result += (2**i);
        }
    }
    return result;
}

binaryToDecimal('0')
binaryToDecimal('1')
binaryToDecimal('10')
binaryToDecimal('11')
binaryToDecimal('100')
binaryToDecimal('101')
binaryToDecimal('110')
binaryToDecimal('111')
binaryToDecimal('1000')