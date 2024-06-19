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
    for (let i = 0; i < Math.trunc(dit / 2); i++) {
        m = Math.trunc(x / 10 ** (dit - 1 - i)) % 10;
        n = Math.trunc((x % 10 ** (1 + i)) / 10 ** i);
        if (m != n) {
            return false;
        }
    }
    return true;
};

var isPalindromeV2 = function (x) {
    // x是負數就回傳false
    if (x < 0) {
        return false;
    }
    // 把倒轉的數值裝到rev裡面
    let copy = x;
    let rev = 0;
    // 拉出copy的個位數裝到rev裡面並且去除(ex. copy=321, rev=0 => copy=32, rev=1)
    // dit => 取出的個位數
    let dit;
    // ditNum總共有幾位數
    let ditNum = 0;
    for (ditNum; copy >= 10; ditNum++) {
        copy = copy / 10;
    }
    // 重新給copy值
    copy = x;

    for (let i = 0; i < ditNum + 1; i++) {
        dit = copy % 10;
        // rev * 10 => 空出空間來放個位數
        rev = rev * 10 + dit;
        copy = parseInt(copy / 10);
    }
    return rev == x;
};

let x = -1;
console.log(isPalindrome(x));
console.log(isPalindromeV2(x));
