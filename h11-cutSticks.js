/***
You are given N sticks, where the length of each stick is a positive integer. A cut operation 
is performed on the sticks such that all of them are reduced by the length of the smallest stick.

Suppose we have six sticks of the following lengths:

5 4 4 2 2 8
Then, in one cut operation we make a cut of length 2 from each of the six sticks. For the next 
cut operation four sticks are left (of non-zero length), whose lengths are the following: 

3 2 2 6
The above step is repeated until no sticks are left.

Given the length of N sticks, print the number of sticks that are left before each subsequent 
cut operations.

Note: For each cut operation, you have to recalcuate the length of smallest sticks (excluding 
zero-length sticks).
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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var numSticks;
    var arr2 = [];
    var i, j;
    //array.splice(where, howmany, ones, to, add)
    var smallest = arr[0];
    var small2;
    for (i = 0 ; i < n ; i++) {
        //get smallest value  
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    while (n > 0) { //one whole pass
        console.log(n);

        for (i = j = 0 ; i < n ; i++) {
            if (arr[i] != smallest) {   
                arr2[j] = arr[i] - smallest;
                if (j == 0 ) {
                    small2 = arr2[j];
                }
                if (small2 > arr2[j]) {
                    small2 = arr2[j];
                } 
                j++;
            }
        }

        n = arr2.length;
        arr = arr2;
        arr2 = [];
        smallest = small2;
    }
}
