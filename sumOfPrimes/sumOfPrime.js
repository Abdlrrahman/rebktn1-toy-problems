/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    var result = 0;
    if (n >= 2) {
        result = 2;
    }
    for (var i = 3; i < n; i++) {
        if (prime(i)) {
            result += i;
        }
    }
// }
    return result;
}


function prime(number) {
    for (var i = 1; i < number; i++) {
        if (number % i !== 0 && number % 2 !==  0) {
                return true;
        }
    }
    return false;
}