/****
Given an array of integers, calculate which fraction of its elements are positive, which fraction of its 
elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal 
value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to (10) exp-4 are acceptable.

Input Format

The first line contains an integer, N, denoting the size of the array. 
The second line contains N space-separated integers describing an array of numbers .

Output Format

You must print the following 3 lines:

A decimal representing of the fraction of positive numbers in the array.
A decimal representing of the fraction of negative numbers in the array.
A decimal representing of the fraction of zeroes in the array.
****/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var posNums, negNums, zeroNums;
    posNums = negNums = zeroNums = 0;
    for (var i = 0 ; i < n ; i++) {
        if (arr[i] >0) {
            posNums++;
        } else if (arr[i] < 0) {
            negNums++;
        } else {
            zeroNums ++;
        }
    }
    console.log(posNums/n);
        console.log(negNums/n);

        console.log(zeroNums/n);

}
