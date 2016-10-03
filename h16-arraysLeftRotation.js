/****
A left rotation operation on an array of size n shifts each of the array's elements  
1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the 
array would become [3,4,5,1,2].

Given an array of n integers and a number, d, perform d left rotations on the array. 
Then print the updated array as a single line of space-separated integers.

Input Format

The first line contains two space-separated integers denoting the respective values of  n
(the number of integers) and d (the number of left rotations you must perform). 
The second line contains n space-separated integers describing the respective elements of 
the array's initial state.
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
    k = k%n;
    
    var new1 = a.slice(k,n);
    var new2 = a.slice(0,k)
    var result = new1.concat(new2);
    console.log(result.join(" "));
}
