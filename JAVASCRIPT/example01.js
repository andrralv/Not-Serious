// Create variables for the welcome message
var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order:";
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = "Mortgage House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// get the element that has an id of greeting
var el = document.getElementById('greeting');
// replace the content of that element with the personalized welcome message
el.textContent = welcome;

// get the element that has an element of usersign and update its contents
var elSign = document.getElementById('userSign')
elSign.textContent = sign; 

// get the element that has an element of tiles and update its contents
var elTiles = document.getElementById('tiles')
elTiles.textContent = tiles;

// get the element that has an element of subtotal and update its contents
var elsubTotal = document.getElementById('subTotal')
elsubTotal.textContent = '$' + subTotal;

// get the element that has an element of shipping and update its contents
var elShipping = document.getElementById('shipping')
elShipping.textContent = '$' + shipping;

// get the element that has an element of grandtotal and update its contents
var elgrandTotal = document.getElementById('grandTotal')
elgrandTotal.textContent = '$' + grandTotal;






