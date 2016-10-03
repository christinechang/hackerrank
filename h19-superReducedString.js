/** HACKER RANK PROBLEM: Super Reduced String
Shil has a string,S, consisting of N lowercase English letters. 
In one operation, he can delete any pair of adjacent letters with same value. 
For example, string "aabcc" would become either "aab" or "bcc" after 1 operation.

Shil wants to reduce S as much as possible. To do this, he will repeat the 
above operation as many times as it can be performed. Help Shil out by finding 
and printing S's non-reducible form!

Note: If the final string is empty, print "Empty String".
**/
function processData(input) {
    //Enter your code here
    var i, j;
    //console.log("input:" + input);
    var inpArr = input.split("");
    //console.log("inputArr:" + inpArr);
    var result = "";
    j = 0 ;

    for (i = 0 ; i < inpArr.length - 1 ;) {
        if (inpArr[i] == inpArr[i+1]) {
            inpArr.splice(i,2); // remove these 2 elements
            // i not incremented so we can test it again.
            // reduce i to test previous letter
            if (i > 0) {
                i--;
            }
        }  else {   //test next element
            i++;
        } 
        //console.log("i:" + i + "inputArr:" + inpArr);

    }
     for (i = 0 ; i < inpArr.length ; i++) {
         result += inpArr[i];
     }
    if (inpArr.length <= 0) {
        result = "Empty String";
    }
    console.log (result);
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
