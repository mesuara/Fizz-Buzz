//  Make a program which iterates the integers from 1 to 100.
// ● For multiples of 3, print "Fizz" instead of the number.
// ● For the multiples of 5, print "Buzz" instead of the number.
// ● For numbers which are multiples of both 3 and 5 print "FizzBuzz"
// instead of the number.
// ● Output : 1 2 Fizz 4 Buzz Fizz 


var i = 1;
while (i <= 100){
    if( i % 15 === 0){
    	console.log('FizzBuzz');
    }
    else if(i % 3 === 0){
    	console.log('Fizz');
    }
    else if(i % 5 === 0){
    	console.log('Buzz');
    }
    else{
    	console.log(i);
    }
    i++;
}