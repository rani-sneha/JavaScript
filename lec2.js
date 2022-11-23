// D=(LP-SP)/LP *100;
var SP=199;
var listingPrice=799;
var disc=(listingPrice -SP)/listingPrice*100;
console.log("Discount Percentage: ", disc);
displayDiscountPercentage=Math.round(disc);
console.log(displayDiscountPercentage +" %off");

//Lecture 8
//Type and Operator precedence in javascript

var res= listingPrice>SP;
console.log(typeof res);
//If  you are confused what kind of data type you are holding? Then we can use typeof operator.

//Lecture 9
//What are the conditionals in javaScript?
var temperature;
//TODO: Go to google and get the data.
temp=20;
if(temperature<20)
{
    console.log("It's very cold outside");
} 
if(temperature<30)
{
    console.log("It's moderate outside");
} 
else{
    console.log("It's very hot outside");
}

//Coersion and falsy values
//What are false values?
// undefinded
//null
//0
//''
//NaN -> not a number

//Cohersion
var user ="2"
if(2==user)
{
    console.log("Condition is true");
}
if(2 === user)
{

}
else{
    console.log("condition 2 is false");
}
