/***
You are given an array of n integers, a0,a1,...,a(n-1), and a positive integer, k. Find and print the number 
of (i,j) pairs where i<j and ai + aj is evenly divisible by k.

Input Format

The first line contains 2 space-separated integers, n and k, respectively. 
The second line contains b space-separated integers describing the respective values of a0,a1,...,a(n-1).

Output Format
Print the number of (i,j) pairs where i<j and ai + aj is evenly divisible by k.
***/
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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var numPairs = 0;
    
    var i,j;
    for (j = 0 ; j < n ; j++) {
        for (i = 0 ; i < j ; i++){  
            numPairs = ((a[i] + a[j])%k == 0) ? numPairs + 1 : numPairs ;
        }
    }
    
    console.log(numPairs);
}
