/***
A Discrete Mathematics professor has a class of N students. Frustrated with their lack of discipline, 
he decides to cancel class if fewer than K students are present when class starts.

Given the arrival time of each student, determine if the class is canceled.

Input Format
The first line of input contains T, the number of test cases.

Each test case consists of two lines. The first line has two space-separated integers, N (students in 
the class) and K (the cancelation threshold). The second line contains N space-separated integers (a1,a2,...,an) 
describing the arrival times for each student.

Note: Non-positive arrival times (ai<=0) indicate the student arrived early or on time; positive arrival 
times (ai>0) indicate the student arrived ai minutes late.

Output Format
For each test case, print the word YES if the class is canceled or NO if it is not.
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
    var t = parseInt(readLine());
    var ontime, i ;
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        // ///////////////////////////////////////////////
        ontime = 0;

        for (i = 0 ; i < n ; i++) {
            if (a[i] <= 0) {
                ontime++;
            }
        }
   
        if (ontime >= k) {
            console.log("NO");
        } else {
            console.log("YES");
        }
       
    }
    

}
