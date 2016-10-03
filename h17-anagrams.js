/****
Alice is taking a cryptography class and finding anagrams to be very useful. We consider 
two strings to be anagrams of each other if the first string's letters can be rearranged 
to form the second string. In other words, both strings must contain the same exact letters 
in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent
on the minimum number of character deletions required to make the two strings anagrams. Can you 
help her find this number?

Given two strings, a and b, that may or may not be of the same length, determine the minimum 
number of character deletions required to make a and b anagrams. Any characters can be deleted 
from either of the strings.
*****/
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
    var a = readLine();
    var b = readLine();
    
    var arr = [];
    var aSort, bSort;
    


    arr = a.split("");
    aSort = arr.sort();
    arr = b.split("");
    bSort = arr.sort();
    
    var i;
    var dropNum = 0;

    for (i = 0 ; i < aSort.length && i < bSort.length ; ) {
        if (aSort[i] < bSort[i]) {
                aSort.splice(i,1);
                dropNum ++;
            
        } else if (aSort[i] > bSort[i]) {
                bSort.splice(i,1);
                dropNum++;


        } else if (aSort[i] == bSort[i]) {
            i++;

        }
        
    }
    
    dropNum += (Math.abs(aSort.length - bSort.length));
    console.log(dropNum);

}
