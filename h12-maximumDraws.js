/***
Jim is off to a party and is searching for a matching pair of socks. His drawer is filled with socks, each pair of a different color. In its worst case scenario, how many socks (x) should Jim remove from his drawer until he finds a matching pair?

Input Format 
The first line contains the number of test cases T. 
Next T lines contains an integer N which indicates the total pairs of socks present in the drawer.

Output Format 
Print the number of Draws (x) Jim makes in the worst case scenario.
***/
function processData(input) {
    //Enter your code here
    var inpArr = input.split("\n");
    var inpI = 0;
    var numTests = inpArr[inpI++];
    var numPair;
    var t;
    for (t = 0 ; t <numTests ; t++) {
        numPair = inpArr[inpI++];
        console.log(Number(numPair) + 1);
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
