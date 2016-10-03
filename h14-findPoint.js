/***
Given two points P and Q, output the symmetric point of point P about Q.

Input Format 
The first line contains an integer T representing the number of testcases 
Each test case is a line containing four space separated integers Px Py Qx Qy representing 
the (x,y)coordinates of P and Q.
***/
function processData(input) {
    //Enter your code here
    var inpArr = input.split("\n");
    var inpI = 0;
    var nTests = inpArr[inpI++];
    var inpLinArr;
    var px,py,qx,qy;
    for (var t = 0 ; t < nTests ; t++) {
        inpLinArr = inpArr[inpI++].split(" ");
        px = Number(inpLinArr[0]);
        py = Number(inpLinArr[1]);
        qx = Number(inpLinArr[2]);
        qy = Number(inpLinArr[3]);
        console.log((qx - px + qx) + " " + (qy - py + qy) );

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
