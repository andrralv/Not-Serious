// first javascript program on my own

def foobar(num1) 
{
	if ((num1 % 3 == 0) && (num1 % 5)) {
	return 'foobar';
	} else if ((num1 % 3 == 0) && (num % 5 != 0)) {
	return 'foo';
	} else if ((num1 % 5 == 0) && (num % 3 != 0)) {
	return 'bar';
};

console.log(foobar(5));

def fibonnaci(n) 
{
	if ((n == 1) || (n == 2) {
		return n;
	} else if (n > 2) {
		for (i=1; i<n; n++) {
			return fibbonacci(n-1) + fibbonacci(n-2);
		}
	}
};

console.log(fibbonacci(12));