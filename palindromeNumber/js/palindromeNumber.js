// check if x == palindromeNumber(ex.121, 131)

var isPalindrome = function (x) {
    //x can't be negative num
    if (x < 0) {
        return false;
    }
    let y = x;
    //dit(digit) 代表x是幾位數
    let dit = 1;
    for (dit; y >= 10; dit++) {
        y = y / 10;
    }
    //m是第一位,n是最後一位

    let m;
    let n;
    for (i = 0; i < Math.trunc(dit / 2); i++) {
        m = Math.trunc(x / 10 ** (dit - 1 - i)) % 10;
        n = Math.trunc((x % 10 ** (1 + i)) / 10 ** i);
        if (m != n) {
            return false;
        }
    }
    return true;
};

let x = 1111;
console.log(isPalindrome(x));
