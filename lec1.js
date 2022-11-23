console.log("Hello Sneha");

//Lecture 5
//Variables and data Types in java

var fullName= "SNEHA RANI";
//fullName
//full-name
//full_name

var courseName="Javascript course";
var right=true; //True
var wrong=false; //False 
var count=34
console.log(right);
console.log(count);
console.log("count");
var paymentMode;
console.log(paymentMode);
paymentMode="Credit Card";
console.log(paymentMode);

//Lecture 6
//Our first User sign Up

const uid ="abc123";
//uid = "198wer" This will not work because const variables can only be initialized once.
var firstName="Sneha";
var lastName="Rani";
var country="India";
var state="Jharkhand";
var coursecount=0;
var isLoggedInFromGoogle=true;
var isLoggedInFromFacebook=false;
var email="sneha0212@.gmail.com";
var password="jqwree";
var confirm="jqwree";


// alert("Oops you missed somrthing");
// fullName=prompt("Enter your name");

//display the information

console.log("Full Name is: "+fullName);
console.log("My email i: ",email);

console.log(`
    With Unique ID: ${uid}
    User's first name is: ${firstName}
    User's last name is: ${lastName}
    and his email ID: ${email}
    her country of origin: ${country}
    her hometown: ${state}
    her course count: ${coursecount}
    did she logged in from Google? ${isLoggedInFromGoogle}
    did she logged in from Facebook? ${isLoggedInFromFacebook}
`); // This is called interpollation.

//Lecture 7
//Operators in javaScript

var num1=9;
var num2=4;
console.log(num1+num2);
console.log(num1*num2);
console.log(num1-num2);
console.log(num1%num2);
console.log(num1/num2);
var ans=num1>num2;
console.log(ans);