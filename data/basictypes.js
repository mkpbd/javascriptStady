// Methods of primitives Data

//JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects.

// A primitive Is a value of a primitive type.

// There are 6 primitive types: string , number , boolean , symbol , null and undefined .

let str = "Hello";

alert(str.toUpperCase()); // HELLO

let n = 1.23456;
alert(n.toFixed(2)); // 1.23

// ====================== Constructors String/Number/Boolean are for internal use only =====================

// Some languages like Java allow us to create “wrapper objects” for primitives explicitly using a syntax like new Number(1) or new Boolean(false)

alert(typeof 0); // "number"
alert(typeof new Number(0)); // "object"!

// Objects are always truthy in if , so here the alert will show up:

let zero = new Number(0);
if (zero) {
  // zero is true, because it's an object
  alert("zero is truthy!?!");
}
//============ On the other hand, using the same functions String/Number/Boolean without new is a totally sane and useful thing.
// They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).

let num = Number("123"); // convert a string to number

// ================ null/undefined have no methods ==============

//=========== Hex, binary and octal numbers

// Hexadecimal  numbers are widely used in JavaScript to represent colors, encode characters, and for many other things.

alert(0xff); // 255
alert(0xff); // 255 (the same, case doesn't matter)

//==== Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
alert(a == b); // true, the same number 255 at both sides

//=================== toString(base) ============

//=========== The method num.toString(base) returns a string representation of num in the numeral system with the given base .

let num1 = 255;
alert(num1.toString(16)); // ff
alert(num1.toString(2)); // 11111111

// One of the best things about objects is that we can store a function as one of its properties.
let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};
john.sayHi(); // Hi buddy!

//=========== Imprecise calculations =======

/**
 *
 * Internally, a number is represented in 64-bit format IEEE-754  ,
 * so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point
 * (they are zero for integer numbers), and 1 bit is for the sign.
 *
 *
 ******************* If a number is too big, it would overflow the 64-bit storage, potentially giving an infinity: *******************
 */

alert(1e500); // Infinity

/**
 * What may be a little less obvious, but happens quite often, is the loss of precision. Consider this (falsy!) test:
 *
 */

alert(0.1 + 0.2 == 0.3); // false

alert(0.1 + 0.2); // 0.30000000000000004

alert((0.1).toFixed(20)); // 0.10000000000000000555

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // 0.30

let sum1 = 0.1 + 0.2;
alert(+sum1.toFixed(2)); // 0.3

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN); // false

alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity

// ======== Sometimes isFinite is used to validate whether a string value is a regular number:=================

let num3 = +prompt("Enter a number", "");
// will be true unless you enter Infinity, -Infinity or not a number
alert(isFinite(num3));

/**
 *
 * Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite
 *
 *
 */

//====================  Compare with Object.is  ==========================

// There is a special built-in method Object.is  that compares values like === , but is more reliable for two edge cases:
// It works with NaN : Object.is(NaN, NaN) === true , that’s a good thing
// Values 0 and -0 are different: Object.is(0, -0) === false , technically that’s true, because internally the number has a sign bit that may be different even if all other bits are zeroes.

// In all other cases, Object.is(a, b) is the same as a === b .

//===================================== parseInt and parseFloat =========================
//=== Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:

alert(+"100px"); // NaN

alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5
alert(parseInt("12.3")); // 12, only the integer part is returned
alert(parseFloat("12.3.4")); // 12.3, the second point stops the reading

//====== There are situations when parseInt/parseFloat will return NaN . It happens when no digits could be read:

alert(parseInt("a123")); // NaN, the first symbol stops the process

//========== The second argument of parseInt(str, radix)

/**
 *
 *
 * The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
 *
 *
 */

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, without 0x also works
alert(parseInt("2n9c", 36)); // 123456

alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (any random numbers)

let i = 0;
while (i != 10) {
  i += 0.2;
}

//============== A random number from min to max importance: 2

alert(random(1, 5)); // 1.2345623452
alert(random(1, 5)); // 3.7894332423
alert(random(1, 5)); // 4.3435234525

//=============== Quotes =============

//========= Strings can be enclosed within either single quotes, double quotes or backticks: ======

let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;

function sum3(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum3(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
* John
* Pete
* Mary
`;

//==================== Special characters =====================

/**
 *
 *
 * It is still possible to create multiline strings with single quotes by using a so-called “newline character”, written as \n , which denotes a line break:
 *
 */

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList2); // a multiline list of guests

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
// two lines using a normal newline and backticks
let str2 = `Hello
World`;
alert(str1 == str2); // true

/**
 *     Chartcher                     Description
 *
 *      \n                              New line
 *      \r                              Carriage return: not used alone. Windows text files use a combination of two characters \n\r to represent a line break.
 *      \' , \"                         Quotes
 *      \\                              Backslash
 *
 *      \b , \f , \v                    Backspace, Form Feed, Vertical Tab – kept for compatibility, not used nowadays
 *
 *      \xXX                            Unicode character with the given hexadimal unicode XX , e.g. '\x7A' is the same as 'z' .
 *
 *      \uXXXX                          A unicode symbol with the hex code XXXX in UTF-16 encoding, for instance \u00A9 – is a unicode for the copyright symbol © . It must be exactly 4 hex digits.
 *
 *
 *
 *
 *
 *
 *
 */

// Examples with unicode:

alert("\u00A9"); // ©
alert("\u{20331}"); // 佫, a rare Chinese hieroglyph (long unicode)
alert("\u{1F60D}"); // 😍, a smiling face symbol (another long unicode)

alert(" I ' mthe Walrus ! "); // / / I ' m the Walrus!
alert(`I'm the Walrus!`); // I'm the Walrus!
alert(`The backslash: \\`); // The backslash: \
alert(`My\n`.length); // 3

//========== Accessing characters ===========

let str3 = `Hello`;
// the first character

alert(str3[0]); // H
alert(str3.charAt(0)); // H
// the last character
alert(str3[str3.length - 1]); // o

/***
 *
 *
 * The square brackets are a modern way of getting a character, while charAt exists mostly for historical reasons
 * The only difference between them is that if no character is found, [] returns undefined , and charAt returns an empty string:
 *
 */

let str4 = `Hello`;
alert(str4[1000]); // undefined
alert(str4.charAt(1000)); // '' (an empty string)

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

//======================= Strings are immutable =====================

// Strings can’t be changed in JavaScript. It is impossible to change a character. Let’s try it to show that it doesn’t work:

let str6 = "Hi";
str6[0] = "h"; // error
alert(str6[0]); // doesn't work

//============= Searching for a substring ==============

// There are multiple ways to look for a substring within a string.

//str.indexOf

let str11 = "Widget with id";
alert(str11.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
alert(str11.indexOf("widget")); // -1, not found, the search is case-sensitive
alert(str11.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

//============== The optional second parameter allows us to search starting from the given position. =====

//========== let str = 'Widget with id';
alert(str.indexOf("id", 2)); // 12

//=========== If we’re interested in all occurrences, we can run indexOf in a loop. Every new call is made with the position after the previous match:

let str12 = "As sly as a fox, as strong as an ox";
let target = "as"; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str12.indexOf(target, pos);
  if (foundPos == -1) break;
  alert(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

let str21 = "As sly as a fox, as strong as an ox";
let target21 = "as";
let pos21 = -1;
while ((pos21 = str21.indexOf(target, pos21 + 1)) != -1) {
  alert(pos21);
}


//============== includes, startsWith, endsWith ====================

// The more modern method str.includes(substr, pos)  returns true/false depending on
// whether str contains substr within.


alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

// The optional second argument of str.includes is the position to start searching from:

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"