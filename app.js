// Chap 9-11
//Q1
var city = prompt("Enter City Name");
if (city === "Karachi") {
    alert("Welcome to City Of Lights");

}
//Q2
var gender = prompt("Your Gender? male OR female");
if (gender === "male") {

    alert("Good Morning Sir!");
}
else if (gender === "female") {
    alert("Good Morning Mam!");

}
else {
    alert("Enter male OR female");
}
//Q3
var color = prompt("Enter Color of traffic signal");
if (color === "red") {

    alert("Must Stop");
}
else if (color === "yellow") {
    alert("Ready To Move");

}
else if (color === "green") {
    alert("Move Now");
}
//Q4
var remfuel = +prompt("Enter Fuel In litres");
if (remfuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("You Have Sufficient Fuel");
}
//Q5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}
//Q6
document.write("<h1>MARKSHEET</h1>");
var chem = +prompt("Enter Chemistery Marks out of 100");
var phy = +prompt("Enter Physics Marks out of 100");
var maths = +prompt("Enter Maths Marks out of 100");
var totalMarks = 300;
var MarksObtained = chem + phy + maths;
var percentage = (MarksObtained / totalMarks) * 100;
document.write("<br>");
document.write("Total Marks=" + totalMarks);
document.write("<br>");
document.write(" MarksObtained=" + MarksObtained);
document.write("<br>");
document.write(" Percentage=" + percentage + "%");
document.write("<br>");
if (percentage >= 80) {
    document.write("Grade:" + "A-One");
    document.write("<br>");
    document.write("Remarks:Excellent");

}
else if (percentage >= 70) {
    document.write("Grade:" + "A");
    document.write("<br>");
    document.write("Remarks:Good");

}
else if (percentage >= 60) {
    document.write("Grade:" + "B");
    document.write("<br>");
    document.write("Remarks:You Need To Improve");

}
else {
    document.write("Grade:" + "F");
    document.write("<br>");
    document.write("Remarks:Sorry");


}
//Q7
var secNumber = 6;
var guessNumber = +prompt("Enter Digit From 1-10");
if (secNumber == guessNumber) {
    alert("Bingo! Correct Answer");
}
else if (guessNumber == ++secNumber) {
    alert("You Are Very Close");
}
else {
    alert("Sorry! Wrong Guess");
}
//Q8
var Number = +prompt("Enter Number");
var Reminder = Number % 3;
if (Reminder == 0) {
    alert("Number Is Divisible By 3");

}
else {
    alert("Number Is Not Divisible By 3")
}
//Q9
var Number = +prompt("Enter Number");
var Reminder = Number % 2;
if (Reminder == 0) {
    alert("Number Is Even");

}
else {
    alert("Number Is Odd");
}
//Q10
var T = +prompt("Enter Temprature");
if (T > 40) {
    alert("It is Too Hot Outside");
}
else if (T > 30) {
    alert("The Weather today is Normal.");
}
else if (T > 20) {
    alert("Today’s Weather is cool.");
}
else {
    alert("OMG! Today’s weather is so Cool.")
}
//Q11
var firstNumber = +prompt("Enter First Number");
var op = prompt("Enter Operation (+,-,*,/,%)");
var secondNumber = +prompt("Enter Second Number");

var result;
if (op === "+") {
    result = firstNumber + secondNumber;
    alert("Your Result Of Addition=" + result);

}

else if (op === "-") {
    result = firstNumber - secondNumber;
    alert("Your Result Of Subtraction=" + result);

}
else if (op === "*") {
    result = firstNumber * secondNumber;
    alert("Your Result Of Multiplication=" + result);

}

else if (op === "/") {
    result = firstNumber / secondNumber;
    alert("Your Result Of Division=" + result);

}
else if (op === "%") {
    result = firstNumber % secondNumber;
    alert("Your Result Of Remider=" + result);

}
else {
    alert("Please! Enter All Fields Correctly");
}
// Chap 12-13
//Q1
var string = prompt("Enter String/Variable/Number/Char");
var n = +prompt("Enter index number of char to found what char it is");
var code = string.charCodeAt(n);
console.log(code);

if (code >= 97 && code <= 122) {

    alert("It is an Lowercase letter");
}

else if (code >= 65 && code <= 122) {

    alert("It is an Uppercase letter");
}
else if (code >= 48 && code <= 57) {

    alert("It is a Number");
}
//Q2
var int1 = +prompt("Enter First Number");
var int2 = +prompt("Enter Second Number");

if (int1 > int2) {
    alert(" Larger Number=" + int1);
}
else if (int2 > int1) {
    alert(" Larger Number=" + int2);
}
else {
    alert("Numbers Are Equal");
}
//Q3
var num = +prompt("Enter Number");
if (num == 0) {
    alert("Number is Zero");
}
else if (num < 0) {
    alert("Number is Negative");

}
else if (num > 0) {
    alert("Number is Positive");

}
//Q4

var input = prompt("Enter Char");
if (input.length != 1) {
    alert("Enter Only 1 character");
}
else if (input === "a" || input === "A" || input === "e" || input === "E" || input === "i" || input === "I" || input === "o" || input === "O" || input === "u" || input === "U") {
    alert("its a vowel")
}
else {
    alert("Not a vowel")
}
//Q5
var password = "Saraib0702";
var enteredPassword = prompt("Enter Your Password");
if (password === "") {
    alert("Please Enter Your Password");
}
else if (password === enteredPassword) {
    alert("Correct! The password of you entered match the original one");
}
else {
    alert("Incorrect Passowrd");
}
//Q6
var hours = +prompt("Enter Hours");
if (hours < 0 || hours > 24) {
    alert("Enter Hours b/w 1-24");
}
else if (hours < 12) {
    alert("Good Day");
}
else if (hours <= 24) {
    alert("Good Evening");
}
//Q7
var hours = +prompt("Enter time In 24 hours Format like:1900=7pm");
if (hours < 0 || hours > 2400) {
    alert("Enter in 24 hours format");
}

else if (hours >= 0000 && hours < 1200) {
    alert("Good Morning!");
}
else if (hours >= 1200 && hours < 1700) {
    alert("Good Afternoon!");
}
else if (hours >= 1700 && hours < 2100) {
    alert("Good Evening!");
}
else if (hours >= 2100 && hours < 2359) {
    alert("Good Night!");
}

//Chap 14-16
//Q1
function literalArray() {

    var cities = [];
    alert("var cities = [ ] ;")
}

// Question 2 

function objectArray() {

    arrayList = new Array()
    alert(" arrayList = new Array()")
}

// Question 3 

function stringsArray() {

    var stringArray = ["Karachi", "Lahore", "Islambad"];
}

// Question 4 


function NumberArray() {

    var numberArray = [1, 2, 4, 5, 6, 66, 67];
}


// Question 5  


function booleanArray() {

    var boolArray = [true, true, false, false];
}


// Question 6 
function mixArray() {

    var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 66, 67, true, true, false, false];
}


// Question 7 
function educationQualification() {

    var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

    document.write("<h1>Qualification</h1><br>")
    document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
    document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
    document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
    document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
    document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
    document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
    document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
    document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// Question 8 

function marksheet() {
    var stdNames = ["Sadiq", "bilal", "Dany"];
    var stdScroes = [450, 340, 380];

    var perofStd1 = stdScroes[0] / 500 * 100;
    var perofStd2 = stdScroes[1] / 500 * 100;
    var perofStd3 = stdScroes[2] / 500 * 100;

    document.write(`Score of  ${stdNames[0]} is ${stdScroes[0]}. Percentage ${perofStd1}% <br> `)
    document.write(`Score of  ${stdNames[1]} is ${stdScroes[1]}. Percentage ${perofStd2}% <br> `)
    document.write(`Score of  ${stdNames[2]} is ${stdScroes[2]}. Percentage ${perofStd3}% <br> `)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 9  

function Initialize() {

    var colors = ["red", "green", "blue"];
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}
// Question 9a 

function addcolorStart() {
    var colorInput = prompt("Enter a color name which do you want to add at the start.");
    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.unshift(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 9b 

function endcolorStart() {
    var colorInput = prompt("Enter a color name which do you want to add at the end.");
    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.push(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9c 

function addMoreColorStart() {
    var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
    var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");

    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.unshift(colorInput1, colorInput2);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9d 

function deleteColorStart() {
    var colorInput = prompt("Enter a color  name which do you want to delete  at the start.");

    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.shift(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9e  

function specificIndex() {
    var colors = ["red", "green", "blue"];
    var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
    var indexNumber = +prompt("which color do you want to add on that index? ");
    colors.splice(indexNumber, 0, colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 9f  

function numberOfColorDelete() {
    var colors = ["red", "green", "blue"];
    var deleteIndex = +prompt("At which index do you want to delete color?")
    var colorDelete = +prompt("which color do you want to delete on that index?")
    colors.splice(deleteIndex, colorDelete);
    document.write(colors + "<br/>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 10 

function arrayAscOrder() {

    var studentScores = [67, 87, 98, 97, 67, 80, 90];
    document.write("Scores of Students :  " + studentScores);

    document.write("<br>")

    var sortedScores = studentScores.sort()
    document.write("Ordered Scores of Students :  " + studentScores);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 11  

function CopyArray() {

    var citiesArray = ["karachi", "Queeta", "Peshawar", "lahore", "Islamabad"]
    var selectedCities = citiesArray.slice(2, 5);
    document.write("Cities List  : <br> " + citiesArray + "<br>");
    document.write("Cities List  : <br> " + selectedCities);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 12 

function JoinArray() {

    var arr = ["This", "is", "my", "cat"];
    document.write("<h1>Array: </h1>");
    document.write(`<h1>${arr}</h1><br>`);

    var joined = arr.join(" ");

    document.write("<h1>String: </h1>");
    document.write(`<h1>${joined}</h1><br>`);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 13  

function FIFO() {

    var acc = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${acc}</h2><br>`);

    var firstDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

    var secDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

    var thirdDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

    var fourthDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}
// Question 14  


function LIFO() {

    var acc = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${acc}</h2><br>`);

    var firstDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

    var secDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

    var thirdDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

    var fourthDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}
// Question 15  

function dropdown() {

    var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

}
<div class="dropDown">
    <select>
        <option>${mobiles[0]}</option>
        <option>${mobiles[1]}</option>
        <option>${mobiles[2]}</option>
        <option>${mobiles[3]}</option>
        <option>${mobiles[4]}</option>
        <option>${mobiles[5]}</option>
    </select></div>