/*
  ...........YOUR MISSION...........

  Write a function that returns a function so that the
  code at the bottom runs correctly.
*/

// function add(a) {
//   return function(b){
//   	return a + b;
//   };
// }

// var add2 = add(2);
// var added = add2(3);
// // console.log(added);  // This should output 5

// Write a basic HTML / JavaScript program that does the following

// 1. In HTML, have a single text input field
// 2. In HTML , have a button
// 3. In JavaScript, have a function divides a number by 10
// 4. In JavaScript, have a function that multiplies a number by 5
// 5. When the button is clicked, call a JavaScript function that checks if the user has entered in a value in the input field
// 6. If there is no value, put an appropriate message in an alert box telling the user to enter something
// 7. If there is a value, and its numeric value is greater than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that divides by 10.
// 8. If there is a value, and its numeric value is less than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5.
// 9. Write the result of the calculation into the HTML document.

var myButton = $('button');
var input = $('input');
var output = $('#output');

function downADecimal (a) {
	return a / 10;
}

function by5 (a) {
	return a * 5;
}

function needlessRedirection(a, func) {
	return func(a);
}

myButton.click(function(){
	var inputVal = input.val();
	var outputVal = "Please enter a number";
	if (inputVal === "") {
		output.html(outputVal);
	} else if (inputVal > 10000) {
		output.html(needlessRedirection(inputVal, downADecimal));
	} else {
		output.html(needlessRedirection(inputVal, by5));
	}
}); //end event handler

