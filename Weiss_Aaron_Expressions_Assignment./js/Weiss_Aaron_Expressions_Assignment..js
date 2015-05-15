/**
 * Created by aweiss on 5/14/15.
 */
/* Aaron Weiss
 sec 02
 Expressions_Assignment
 14MAY
 */

//alert("hello world... This is in the JS file")
//great for checking values and debugging
//also shows all errors
//console.log("this is the console.1")

// prompt the user for width and height
//explains to them whats going on
//var height = prompt("let calculate the are of a rectangle \nPlease enter the height enter the height");
//var width = prompt("Please enter the with of the  rectangle:");
//var total= height*width
//console.log(total)


alert("Hello Click \"ok\" to continue Work Stress Calculator");//alert command tell user about the project
var textString = ["0On a scale from 1-10, \n How much stress do you have","1On a scale from 1-10, \n How RELAX are you right now at work?","2How many REPORTS do you have to complete?","3Do you feel that violence is the ONLY solution?"]
var outPutString = ["0Your STRESS level is ",'1Your RELAX level is ',"2The number of reports until complete is ","3You feel that violence is the ONly solution in the work place",'5Your work stress level is ']

var stress = prompt(textString[0]);
var relax = prompt(textString[1]);
var report = prompt(textString[2]);
var violence = prompt(textString[3]);
var total = violence*(stress*report)-(stress*relax);

Console.log(textString[0]+stress);
console.log(outPutString[1]+relax);
console.log(outPutString[2]+report);
console.log(outPutString[3]+violence;
console.log(outPutString[4]+total);
