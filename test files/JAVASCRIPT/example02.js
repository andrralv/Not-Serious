// new test - DOM related

// adding items to the end and start of a list
var list = document.getElementByTagName('ul')[0]; // get the ul element vyuireq	n

// add new item to the end of a list
var newItemLast = document.createElement('li'); // create element
var newTextLast = document.createTextNode('cream'); // create text node
newItemLast.appendChild('newTextLast'); // add text node to element
list.appendChild('newItemLast'); // add element to end of list

// add new item to the start of the list

var newItemFirst = document.createElement('li'); 
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild('newTextFirst');
list.insertBefore('newItemFirst', list.firstChild); //specifying the parent node which is list-insert before puts it at the start of the list

var listItems = document.querySelectorAll('li'); // all li elements

// add a class of cool to all list items
var i;
for (i=0; i<listItems.length;i++) {
	listItems[i].className = 'cool';
}

//add number of items in the list to heading
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; //h2 text
var totalItems = listItems.length; // no of li elements
var newHeading = headingText + '<span>' + totalItems + '<span>'; // content
heading.textContent = newHeading;




