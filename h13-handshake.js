/***
At the annual meeting of Board of Directors of Acme Inc, every one starts shaking hands with everyone 
else in the room. Given the fact that any two persons shake hand exactly once, Can you tell the total 
count of handshakes?

Input Format 
The first line contains the number of test cases T, T lines follow. 
Each line then contains an integer N, the total number of Board of Directors of Acme.

Output Format

Print the number of handshakes for each test-case in a new line.
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
    var T = parseInt(readLine());

    var sum = 0;
    var i;
    //T = 10;
    //var test = 3;
    for(var a0 = 0; a0 < T; a0++){
        var N = parseInt(readLine());


        for (i = N-1 ; i > 0 ; i--) {
            sum += (N - i);
        }
        console.log(sum);
        sum = 0;
        //test++;
    }

}
