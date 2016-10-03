/**
Consider two non-negative long integers, a and b, where a<=b. The bitwise AND of 
all long integers in the inclusive range between a and b can be expressed as:
 a &(a+1) & ... &(b-1) & b,
where & is the bitwise AND operator.

Given n pairs of long integers, ai and bi, compute and print the bitwise AND 
of all natural numbers in the inclusive range between ai and bi.
**/
function processData(input) {
    //Enter your code here
    inpArr = input.split("\n");
    var inpIdx = 0;
    var numTests = Number(inpArr[inpIdx++]);
    //console.log("numTests = " + numTests);
    var low, high, n, j, andProd, num, binNum, binNum2;
    for (n = 0 ; n < numTests ; n++) {
        numArr = inpArr[inpIdx++].split(" ");
        low = Number(numArr[0]);
        high = Number(numArr[1]);
        
        andProd = low;
        for (num = low + 1;  num <= high ; num++) {
            andProd &= num;
        }

        andProd = andProd >>> 0;    //makes it unsigned integer - solves problems
        
        console.log(andProd);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
