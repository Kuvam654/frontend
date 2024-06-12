//tutorial 

/*
JavaScript is inserted between <script> tag either in body or the head tag or in both. There are no limitations to the number of javascript that 
can be inserted in the document

If placing JS Code in Body, placing JavaScript code at bottom of the body tag can help improve display speed, because script implementation slows
down the display.

JavaScript code can also be inserted in separate JS File. A line shall be added to the main html document to make it accessible which is 
"<script src="myScript.js"></script>" in the head tag.

JavaScript is Case Sensitive.


To Display Data in a HTML File.

1. Writing into an HTML element, using innerHTML.
2. Writing into the HTML output using document.write().
3. Writing into an alert box, using window.alert().
4. Writing into the browser console, using console.log().

note- Window is a global keyword. Writing it need not be compulsory.
    - JS Statements are executed in the order in which they are written.
    - JavaScript code blocks { ... } are used to group statements that are to be executed together.
    - Keywords are reserved words that cannot be used for naming variables.
    - Var, Let, Const, If, Switch, For, Function, Return, Try.


JavaScript Values

1. Literals - Fixed Values
            - Numbers are written with or without decimal places.
            - Strings are text, within single or double quotes.

2. Variables - Variable Values
             - Declared using Var, Let and Const.
             - Variable name must begin with a letter/ dollar sign/ underscore.

Difference between var, let and const

var
- it is global scoped meaning variables defined outside the function can be accessed globally, and variables defined inside a function can be accessed
  within a function.
- can be redeclared within the same scope.

let
- it is block scoped.
- can be updated but not redeclared in same scope.
  let a = 10
  if (true) {
      let a = 9
      console.log(a) // It prints 9
  }
  console.log(a) // It prints 10

const
- it is block scoped
- cannot be updated nor redeclared in any scope.
- can update values of array and object but cannot reassign it.

types of javascript operators
- Arithematic Operators - +, -, *, **, /, %, ++, --
- Assignment Operators - =, +=, -=, *=, /=, %=, **=
- Comparison Operators - ==(equal value), ===(equal value and type), !=(not equal value), !==(not equal value or type), >, <, >=, <=, ?(ternary)
- logical Operators - &&, ||, !
- type Operators - typeof(returns type of var), instanceof(oops ka concept).
- Bitwise Operators - &, |, ~(not), ^(xor), <<, >>, >>>

comparsion operators can be used to compare string alphabetically.




DataTypes in JavaScript
1. String
2. Number(double)
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object(can be built-in or user-defined)

note - A same variable can be re-assigned different values of different data types.
     - For exponential data type - number followed by e followed by power example - 123e5, 123e-5

Function in JS

Syntax - function f_name(parameters separated by comma) {
            //code to be executed
         }
Calling a function - f_name(parameters);








Object in JS

To define properties of a thing, we use object.
Syntax - 
1. Direct declaration - const object_name = {property1 : value1, property2: value2 ... propertyx : valuex};
2. Using new Keyword - 

Implementation of 1
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

person.fullname(); - it will execute as a function
person.fullname; - it will return the function defination.

Implementation of 2
const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

note- You can get value/property - for example - person.firstname; or person["firstname"]
    - Value are also called property.
    - Methods are Functions stored as property.


Adding new properties
object_name.key = "value";

Deleting new properties
delete object_name.key;

Display values of an Object
text = ""
for (let x in person) {
    text += person[x] + " ";
}

Create Array from Object Values
Object.values(Object_name)

Simplify loops
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
OUTPUT - Bananas: 300
         Oranges: 200
         Apples: 500

JSONify the object
JSON.stringify(person);

Nested Objects
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

to access the nested object
myObj.myCars.car2;






JavaScript Events

<button onclick = "document.getElementById('demo').innerHTML = Date()">The Time is?</button>
In the example above, the JavaScript code changes the content of the element with id="demo".

<button onclick = "this.innerHTML = Date()">The time is?</button>
In the example above, the code changes the content of its own element (using this.innerHTML):

<button onclick="displayDate()">The time is?</button>
In the example above, the code displays the date when a button is clicked.

Common HTML Elements
onchange	 - An HTML element has been changed
onclick	The  - user clicks an HTML element
onmouseover	 - The user moves the mouse over an HTML element
onmouseout	 - The user moves the mouse away from an HTML element
onkeydown	 - The user pushes a keyboard key
onload	     - The browser has finished loading the page





Strings

to find length of a string use str_var.length;
to find character at i'th index use str_var.charAt(i);
to get utf-16 code of the character at i'th index use str_var.charCodeAt(i);

for adding quotes to string and not to confuse whether it string has ended or not use.
for double quotes use \" word\"
for single quotes use \' word \'
for backslash(\) use \\

escape characters
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator

String methods

1. str_var.length;

2. str_var.charAt(i); 
   str_var.at(i);
   str_var[i];

3. str_var.charCodeAt(i) - gives utf-16 code of character at i'th position.

4. slicing - str_var.slice(a,b) - slices the string from a to b-1.

5. substring - str_var.substring(a,b) - difference between slicing and substring is that substring treats start and end values less than 0 as 0.

6. uppercase - str_var.toUpperCase();

7. lowercase - str_var.toLowerCase();

8. concatination - str_var1.concat(str_var2); Joins str_var1 and str_var2

9. trim - str_var.trim(); - removes whitespaces from both the sides of the string.

10. trimStart - str_var.trimStart(); - removes whitespace from front of the string only.

11. trimEnd - str_var.trimEnd(); - removes whitespace from end of the string.

12. padStart - str_var.padStart(length, "char"); - pad a string with char until it reaches the given "length".
example let text = "5";
        let padded = text.padEnd(4,"0"); the result is "0005"

13. padEnd - str_var.padEnd(length, "char"); - pad a string from the end.

14. replace - str_var.replace("str1", "str2"); - it replaces str1 in str_var with str2.

15. replaceAll - str_var.replaceAll("str1", "str2"); - multiple replacement in the string.

16. split - str_var.split(",")
let text = "a,b,c,d,e,f";
const myArray = text.split(",");

an array will be made [a ,b ,c ,d ,e ,f]

17. indexOf - str_var.indexOf("str") - it returns index of first occurence of string in a string, or it returns -1 if the string is not found.

18. lastIndexOf - str_var.lastIndexOf("str") - it returns index of last occurence of the specified text in the string. -1 if the string is not found.

note - Both methods accept second parameter as starting position of the search.

19. search - str_var.search("str"); - same work as indexOf, difference is just that search cannot take second parameter for starting search.

20. includes - str_var.includes("str") - returns true if str_var contains str. if not, then false.

21. startsWith - str_var.startsWith("str") - returns true if the string starts with specified value.

22. endsWith - str_var.endsWith("str") - returns true if string ends with specifies value.




Numbers

note- "100" + "10" = 10010
    - "100" - "10" = 90
    - "100" * "10" = 1000
    - "100" / "10" - 10
    - isNaN()- can be used to check if the result is not a number - example 100/"apple"
    - Infinity - JS will return this value if you calculate number outside the largest possible number.

number to object - let x = new Number(123); converts the given number to object.
JS integers are accurate upto 15 digits.


BigInt

To declare a normal number as bigint use n at the end or BigInt(number)
explicit conversion - BigInt (var);




Array Declaration

1. const array_name = [value1, value2 ......]
2. const array_name = []
   array_name[0] = x;
   array_name[1] = y
   and so on
3. const array_name = new Array(value1, value2, value3 ....)

Array Methods

1. toString- The JavaScript method toString() converts an array to a string of (comma separated) array values.
2. length - arr_var.length; - Returns number of elements in array.
3. sort - arr_var.sort(); - sorts the array
4. push - arr_var.push(element); - add the new element to the arr_var
5. at - arr_var.at(i) - gives char at i'th position of arr_var.
6. pop - arr_var.pop(); - removes the last element of the array.
7. shift - arr_var.shift(); - removes the first array element and "shifts" all other elements to lower index.
8. unshift - arr_var.unshift(element) - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
9. copyWithin - arr_var.copyWithin(a,b) - Copy to index a, all elements from index b:
              - arr_var.copyWithin(a,b,c) - Copy to index a, the elements from index b to c.
10. flat - arr_var.flat(); - Coverts a 2D Array to 1D Array.
11. splice - arr_var.splice(a, b, elements); - can be used to add new elements in the array.
                                             - a => position where new elements should be added.
                                             - b => defined how many elements should be removed.

12. slice - arr_var.slice(a,b)
13. indexOf - arr_var.indexOf(element); - searches an array for an element value and returns its position.
14. lastIndexOf - arr_var.lastIndexOf(item, start); - returns the position of the last occurrence of the specified element.
15. includes - arr_var.includes(element); - check if an element is present in an array (including NaN, unlike indexOf).
16. reverse - arr_var.reverse(); It reverse the element in an array.



Date Declaration

There are 9 ways to create a new date object:

1. new Date()
2. new Date(date string)
3. new Date(year,month)
4. new Date(year,month,day)
5. new Date(year,month,day,hours)
6. new Date(year,month,day,hours,minutes)
7. new Date(year,month,day,hours,minutes,seconds)
8. new Date(year,month,day,hours,minutes,seconds,ms)
9. new Date(milliseconds)

confusions?
visit https://www.w3schools.com/js/js_dates.asp





Math module

1. Math.E        // returns Euler's number
2. Math.PI       // returns PI
3. Math.SQRT2    // returns the square root of 2
4. Math.SQRT1_2  // returns the square root of 1/2
5. Math.LN2      // returns the natural logarithm of 2
6. Math.LN10     // returns the natural logarithm of 10
7. Math.LOG2E    // returns base 2 logarithm of E
8. Math.LOG10E   // returns base 10 logarithm of E

ROUND A NUMBER TO INTEGER

1. Math.round(x)	Returns x rounded to its nearest integer
2. Math.ceil(x)	  Returns x rounded up to its nearest integer
3. Math.floor(x)	Returns x rounded down to its nearest integer
4. Math.trunc(x)	Returns the integer part of x (new in ES6)

Other Methods

1. Math.sign(x) returns if x is negative, null or positive.
2. Math.pow(x, y) returns the value of x to the power of y.
3. Math.sqrt(x) returns the square root of x.
4. Math.abs(x) returns the absolute (positive) value of x.
5. Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
6. Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
7. Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
8. Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
9. Math.log(x) returns the natural logarithm of x.



if else statements

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

Switch statements

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

Loops

1. Normal For (like other langauges like java).
2. For In (like python)

example-
for (variable in array) {
  code
}
3. For of loop

example- 
let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}

4. while loop

example-
while (condition) {
  // code block to be executed
}

5. Do while loop

example-
do {
  // code block to be executed
}
while (condition);




JavaScript Set

It is a collection of unique values.
for more info - https://www.w3schools.com/js/js_sets.asp

JavaScript Maps

A Map holds key-value pairs where the keys can be any datatype.
for more info - https://www.w3schools.com/js/js_maps.asp



JavaScript hoisting - Hoisting is JavaScript's default behavior of moving declarations to the top.









*/

let a = 10;
a = 9;
console.log(a);
