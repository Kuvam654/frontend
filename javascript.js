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






*/

let a = 10;
a = 9;
console.log(a);
