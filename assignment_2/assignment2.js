// Exercise #1
// Write your solution below

for (i=1;i<8;i++){

    var output = '';
    for (j=0;j<i;j++){
        output += '#';
        
    }
    
    console.log(output);
}
/* 
Write your explanation for Exercise #1 here
I used a loop inside a loop to log the triangle to the console.
The first loops shows I want it to run 7 times ( 7 lines)
The second loop inside shows for each line of the first loop (i)
1 will be added by the second loop (j)
The second loop will end at the end of the first loop (or when shown to be false)

*/



// Exercise #2
// Write your solution below
function isEven(number) {
    if (number % 2 == 0) {
        return 'The number is even!';
    } else {
        return 'The number is odd!';
    }
}
isEven (44);

/* 
Write your explanation for Exercise #2 here
Using the modulo operator we can determine if a number can be divided ( in this case)
by 2. If the remainder is 0 ( or equal to) the number is even, if not the number is odd.
We use an if...else statement to print the string that is true or false.
I used the number 44, which is even so 'the number is even!' will print.

*/
