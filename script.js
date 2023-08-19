// Good Luck 💪🏾
numbers[10,66.765,345,44,24,245,63,23,54]

function sumTwoSmallestNumbers(numbers) 

{  
 a = Math.min.apply(Math, numbers); 
 numbers.splice(a);
 b = Math.min.apply(Math, numbers);
 return (a + b) 
}