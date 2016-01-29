function one() {
	var hey = document.getElementById('first_line');
	var ok = hey.firstChild.nodeValue;
   	ok = ok.replace('...', 'hi there');
   	hey.firstChild.nodeValue = ok
}

window.addEventListener('load', one, false);



