/***
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Input Format

A single string containing a time in 12-hour clock format (i.e.: hh:mm:ssAM  or hh:mm:ssPM), 
where 01 <= hh <=12 and 00<=mm,ss<=49.

Output Format

Convert and print the given time in 24-hour format, where 00<=hh<=23.
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
    var time = readLine();

    hour = time.substring(0,2);
    mins = time.substring(3,5);
    minimins = time.substring(6,8);
    if ( time.indexOf("PM") > 0) {
        if (hour != 12) {
            hour = (Number(hour) + 12).toString();
        }
    }else {
        if(hour == 12) {
            hour = "00";
        }
    }
    console.log(hour + time.substring(2,8));
    return;
}
