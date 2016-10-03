/***
There are two kangaroos on an x-axis ready to jump in the positive direction (i.e, toward positive infinity). 
The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump. The second kangaroo starts at 
location x2 and moves at a rate of v2 meters per jump. Given the starting locations and movement rates for each 
kangaroo, can you determine if they'll ever land at the same location at the same time?

Input Format
A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

Output Format
Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.
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
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    
    if ((x1 < x2) && (v1 <= v2)) {                  //k1 will never catch up
            console.log("NO");
            return;
    } else if ((x2 < x1) && (v2 <= v1)) {                  //k1 will never catch up
            console.log("NO");
            return;
    } 
    var k1 = x1 + v1;    //first jump
    var k2 = x2 + v2;
    var jump = 1;
    var jump2 = 0;
    var sign, oldDist, dist, temp;
    
    if (x1 == x2 ) {  //done
        console.log("YES");
        return;
    } else if (x2 < x1) { //swap them for program's sake
        temp = x1;
        x1 = x2;
        x2 = temp;
        temp = v1;
        v1 = v2;
        v2 = temp;
    }
  //0 3 4 2
    // establish jump - new position
    jump = Math.floor((x2 - x1)/v1);      //minimum number of jumps to catch up
    //console.log("jump:" + jump );
    if (v2 > v1) {
        jump2 = Math.floor((x2 - x1)/(v2-v1));  //difference between jumps
        jump += jump2;
        //console.log("jump2:" +  jump2);
    }  
    k1 = x1 + (jump * v1);
    k2 = x2 + (jump * v2);
    for (; k1 <= k2 ; jump++) {
        //console.log("in loop jump=" + jump);
        k1 = x1 + (jump * v1);
        k2 = x2 + (jump * v2);
        //console.log("new positions: " + k1 + ":" + k2);
        if (k1 == k2) {
            console.log("YES");
            return;
        } else if (k1 > k2){
            console.log("NO");
            return;
        } 
    }
    console.log("NO");

    
}
