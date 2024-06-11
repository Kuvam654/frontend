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




*/

let a = 10;
a = 9;
console.log(a);
