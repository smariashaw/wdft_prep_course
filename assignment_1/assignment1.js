/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
var numbers = [];
console.log(numbers);


/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/
var numberArray=[];

for(var i=0;i<10;i++){
    numberArray.push(i+1);
}
console.log(numberArray);

    
    //use the array push() method here.



/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/
console.log(numberArray[0]);
console.log(numberArray[9]);


/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/
var car = {
    color:'black'
};
console.log (car.color);

