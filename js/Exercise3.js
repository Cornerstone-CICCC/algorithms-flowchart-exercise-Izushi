let largestNum;
const A = 25;
const B = 10;
const C = 15;

if (A > B && A > C) {
    largestNum = A;
} else if (B > A && B > C) {
    largestNum = B;
} else {
    largestNum = C;
}

console.log(largestNum);